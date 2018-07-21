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
    files: {
      darwin: {
        archive: `Inkdrop-${version}-Mac.zip`
      },
      win32: {
        archive: `Inkdrop-${version}-Windows.zip`,
        installer: 'Setup.exe',
        nupkg: `inkdrop-${version}-full.nupkg`,
        releases: 'RELEASES'
      },
      linux: {
        archive: `Inkdrop-${version}-Linux.zip`,
        deb: `inkdrop_${version}_amd64.deb`,
        rpm: `inkdrop-${version}.x86_64.rpm`
      }
    }
  }

  const data = yaml.safeDump(meta, { lineWidth: 1000 })
  fs.writeFileSync('./meta.yaml', data)
  console.log(
    `Successfully generated a meta file for version ${version} to ./meta.yaml`
  )
} catch (e) {
  console.error(e)
}
