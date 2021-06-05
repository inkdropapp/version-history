var fs = require('fs')
var yaml = require('js-yaml')
var version = require('./package.json').version

try {
  const versions = yaml.safeLoad(fs.readFileSync('./history.yml', 'utf8'))
  const meta = {
    version: version,
    name: 'Inkdrop',
    notes: versions
      .slice(0, 10)
      .map(v => {
        return '## v' + v.version + '\n' + v.notes
      })
      .join('\n'),
    pub_date: new Date(),
    files: [
      {
        platform: 'darwin',
        filetype: 'zip',
        filename: `Inkdrop-${version}-x86_64-Mac.zip`,
        arch: 'x86_64'
      },
      {
        platform: 'darwin',
        filetype: 'zip',
        filename: `Inkdrop-${version}-arm64-Mac.zip`,
        arch: 'arm64'
      },
      {
        platform: 'windows',
        filetype: 'zip',
        filename: `Inkdrop-${version}-Windows.zip`,
        arch: 'x86_64'
      },
      {
        platform: 'windows',
        filetype: 'installer',
        filename: `Setup.exe`,
        arch: 'x86_64',
        additionalFiles: {
          nupkg: `inkdrop-${version}-full.nupkg`,
          releases: 'RELEASES'
        }
      },
      {
        platform: 'linux',
        filetype: 'zip',
        filename: `Inkdrop-${version}-Linux.zip`,
        arch: 'x86_64'
      },
      {
        platform: 'linux',
        filetype: 'deb',
        filename: `inkdrop_${version}_amd64.deb`,
        arch: 'x86_64'
      },
      {
        platform: 'linux',
        filetype: 'rpm',
        filename: `inkdrop-${version}-1.x86_64.rpm`,
        arch: 'x86_64'
      }
    ]
  }

  try {
    fs.mkdirSync('./output')
  } catch (e) {}

  const data = yaml.safeDump(meta, { lineWidth: 1000 })
  fs.writeFileSync('./output/meta.yaml', data)
  fs.writeFileSync('./output/LATEST', 'v' + version)
  fs.writeFileSync('./output/BETA', 'v' + version)
  console.log(
    `Successfully generated a meta file for version ${version} to ./meta.yaml`
  )
} catch (e) {
  console.error(e)
}
