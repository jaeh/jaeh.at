const { exec } = require('child_process')

const config = require('./config')
const conf = config()

const log = require('./log')

const origin = conf.GIT_ORIGIN
const branch = conf.GIT_BRANCH

// const cmd = `git subtree push --rejoin --squash --prefix public ${ origin } ${ branch }`
const cmd = `git push ${ origin } \`git subtree split --prefix public ${ branch }\`:${ branch } --force`


log('executing:', cmd)
exec(cmd, (err, res) => {
  if (err) {
    log.error(err)
    return
  }

  log.success('publish succeeded.', res)
})
