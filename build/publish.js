const { exec } = require('child_process')
const util = require('util')

const log = require('./log')

const publish =
  conf => {
    const { GIT_ORIGIN, GIT_BRANCH, OUT_DIR } = conf

    const outDirArray = OUT_DIR.split('/')
    const outDir = outDirArray[outDirArray.length -1]

    const cmdPrefix = `--prefix=${ outDir }`
    const cmdOnto = `--onto=${ GIT_ORIGIN }/${ GIT_BRANCH }`
    const cmdArgv = `${ cmdPrefix } ${ cmdOnto }`
    const cmd = `git subtree merge ${ cmdArgv }`

    log('exec', cmd)
    exec(cmd, (err, id, stderr) => {
      if (err) {
        log.error(err)
        return
      }

      log.success('git subtree split succeeded:', id.trim())

      let cmd2 = `git push ${ GIT_ORIGIN } ${ id.trim() }:${ GIT_BRANCH }`

      log('exec', cmd2)
      exec(cmd2, (err, res) => {
        if (err) {
          log.error(err)
          return
        }

        log.success('publish successfully finished', res)
      })
    })
  }

module.exports = publish
