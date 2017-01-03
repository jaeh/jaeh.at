const { exec } = require('child_process')

const config = require('./config')
const conf = config()

const log = require('./log')

const origin = conf.GIT_ORIGIN
const branch = conf.GIT_BRANCH

const cmd = `git subtree push --prefix public ${ origin } ${ branch }`


log('executing:', cmd)
exec(cmd, (err, res) => {
  if (err) {
    logError(err)
    return
  }

  log.success('publish succeeded.', res)
})
