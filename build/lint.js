const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')
const stylint = require('stylint')

const log = require('./log')

const config = require('./config')
const conf = config()

const { argv } = process
argv.splice(0, 2)

const lintHtml = argv.indexOf('html') > -1
const lintCss = argv.indexOf('css') > -1

if (lintHtml) {
  console.log('lint html')

  const executable = path.join('node_modules', '.bin', 'pug-lint')
  const config = path.join(conf.BUILD_DIR, 'pug-lintrc.js')
  const filesToLint = [
    path.join(conf.BUNDLE_DIR, '*.html'),
    path.join(conf.INCLUDES_DIR, 'html', '*.pug'),
  ].join(' ')

  const cmd = `${ executable } --config ${ config } ${ filesToLint }`

  exec(cmd,
    (err, res) => {
      if (err) {
        log.error(err)
      }

      log('pug-lint results:', res)
    }
  )
}

if (lintCss) {
  console.log('lint css')

  const executable = path.join('node_modules', '.bin', 'stylint')

  const configPath = path.join(conf.BUILD_DIR, '.stylintrc')
  const filesToLint = [
    path.join(conf.BUNDLE_DIR, '*.css'),
    path.join(conf.INCLUDES_DIR, 'css'),
  ]

  filesToLint.forEach(
    dir => {
      if (!fs.existsSync(dir)) {
        return
      }

      const cmd = `${ executable } --config ${ configPath } ${ dir }`

      console.log('exec :', cmd)

      const exe = exec(cmd,
        (err, stdout) => {
          if (err) {
            log.error(err)
          }
          log('stylint results:', stdout)
        }
      )
    }
  )
}
