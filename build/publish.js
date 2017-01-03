const { exec } = require('child_process')
const util = require('util')

const config = require('./config')
const conf = config()

const log = require('./log')

const { GIT_ORIGIN, GIT_BRANCH, OUT_DIR } = conf

const outDirArray = OUT_DIR.split('/')
const outDir = outDirArray[outDirArray.length -1]

// const cmd = `git subtree push --rejoin --squash --prefix public ${ origin } ${ branch }`
let cmd = `git subtree push --prefix ${ outDir } ${ GIT_ORIGIN } ${ GIT_BRANCH }`
// if (GIT_BRANCH === 'master') {
//   cmd = `git push ${ GIT_ORIGIN } \`git subtree split --prefix ${ outDir } ${ GIT_BRANCH }\`:${ GIT_BRANCH } --force`
// }

log.error('Please review the following command for correctness')
log.warn(cmd)
log.error('then simply enter yes and press enter')
process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', (text) => {
  // console.log('received data:', util.inspect(text))
  if (text !== 'yes\n') {
    done()
    return
  }

  process.stdin.pause()

  log('exec')
  exec(cmd, (err, res) => {
    if (err) {
      log.error(err)
      return
    }

    log.success('publish succeeded.', res)
  })
})

const done =
  () => {
    log('Process aborted. Exiting.')
    process.exit()
  }
