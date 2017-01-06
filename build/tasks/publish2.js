const fs = require('fs-extra')
const { exec } = require('child_process')
const path = require('path')

const conf = require('../config')()
const log = require('../log')

const fetchBranch =
  () =>
    new Promise((resolve, reject) => {
      const { GIT_BRANCH, GIT_REPO, GIT_BRANCH_DIR } = conf
      const branch = `--branch ${ GIT_BRANCH }`
      fs.exists(GIT_BRANCH_DIR, (exists) => {
        let cmd = `git clone ${ branch } ${ GIT_REPO } ${ GIT_BRANCH_DIR }`

        if (exists) {
          cmd = `cd ${ GIT_BRANCH_DIR } && git pull`
        }

        log('exec', cmd)
        exec(cmd, (err, res) => {
          if (err) {
            reject(err)
            return
          }

          resolve(res)
        })
      })
    })

const copyFiles =
  () =>
    new Promise((resolve, reject) => {
      const { OUT_DIR, GIT_BRANCH_DIR } = conf
      log('copy files')
      fs.remove(`${ OUT_DIR }/*`, (err) => {
        if (err) {
          reject(err)
          return
        }

        fs.copy(OUT_DIR, GIT_BRANCH_DIR, (err) => {
          if (err) {
            reject(err)
            return
          }

          resolve()
        })
      })
    })

const runDiff =
  () =>
    new Promise((resolve, reject) => {
      log('run diff')
      resolve()
    })

const commitChanges =
  () =>
    new Promise((resolve, reject) => {
      log('commit changes')
      resolve()
    })

const publish =
  ({ resolve, reject }) => {
    return fetchBranch()
      .then(() => { console.log('fetchBranch complete') })
      .then(copyFiles)
      .then(runDiff)
      .then(resolve)
      .catch(log.error)

    //
    // log('exec', cmd)
    // exec(cmd, (err, id, stderr) => {
    //   if (err) {
    //     log.error(err)
    //     return
    //   }
    //
    //   log.success('git subtree split succeeded:', id.trim())
    //
    //   let cmd2 = `git push ${ GIT_ORIGIN } ${ id.trim() }:${ GIT_BRANCH }`
    //
    //   log('exec', cmd2)
    //   exec(cmd2, (err, res) => {
    //     if (err) {
    //       log.error(err)
    //       return
    //     }
    //
    //     log.success('publish successfully finished', res)
    //   })
    // })
  }

module.exports = publish
