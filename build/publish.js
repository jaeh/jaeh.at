const { exec } = require('child_process')
const util = require('util')

const config = require('./config')
const conf = config()

const log = require('./log')

const { GIT_ORIGIN, GIT_BRANCH, OUT_DIR } = conf

const outDirArray = OUT_DIR.split('/')
const outDir = outDirArray[outDirArray.length -1]

// const cmd = `git subtree push --rejoin --squash --prefix public ${ origin } ${ branch }`
// let cmd = `git subtree push --prefix ${ outDir } ${ GIT_ORIGIN } ${ GIT_BRANCH }`
// if (GIT_BRANCH === 'master') {
//   cmd = `git push ${ GIT_ORIGIN } \`git subtree split --prefix ${ outDir } ${ GIT_BRANCH }\`:${ GIT_BRANCH } --force`
// }
let cmd = `git subtree split --prefix=${ outDir } --onto=${ GIT_ORIGIN }/${ GIT_BRANCH }`

log('exec', cmd)
exec(cmd, (err, id, stderr) => {
  if (err) {
    log.error(err)
    return
  }

  log.success('git subtree split succeeded:', id.trim())

  let cmd2 = `git push ${ GIT_ORIGIN } ${ id.trim() }:${ GIT_BRANCH } --force`

  exec(cmd2, (err, res) => {
    if (err) {
      log.error(err)
      return
    }

    log.success('publish successfully finished', res)
  })

})
