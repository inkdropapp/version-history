const execSync = require('child_process').execSync

const version = require('./package.json').version
const destUrl = `s3://inkdrop-dist/v${version}/`

function uploadFile(file) {
  console.log('uploading:', file)

  const res = execSync(
    `aws s3 cp output/${file} ${destUrl} --storage-class REDUCED_REDUNDANCY --acl public-read`
  ).toString()
  console.log(res)
}

uploadFile('meta.yaml')
uploadFile('LATEST')
