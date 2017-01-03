const fs = require('fs')
const path = require('path')

// config variables
const defaultConfig = {}
defaultConfig.CWD = process.cwd()
defaultConfig.SRC_DIR = defaultConfig.CWD
defaultConfig.ENV = process.env.NODE_ENV || 'development'
defaultConfig.BUILD_DIR = path.join(defaultConfig.SRC_DIR, 'build')
defaultConfig.INCLUDES_DIR = path.join(defaultConfig.SRC_DIR, 'includes')
defaultConfig.BUNDLE_DIR = path.join(defaultConfig.SRC_DIR, 'src')
defaultConfig.OUT_DIR = path.join(defaultConfig.CWD, 'public')
defaultConfig.CSS_DIR = path.join(defaultConfig.INCLUDES_DIR, 'css')
defaultConfig.HTML_DIR = path.join(defaultConfig.INCLUDES_DIR, 'html')
defaultConfig.JS_DIR = path.join(defaultConfig.INCLUDES_DIR, 'js')
defaultConfig.WATCH = true
defaultConfig.SERVE = true
defaultConfig.GIT_ORIGIN = 'origin'
defaultConfig.GIT_BRANCH = 'gh-pages'

const configPath = path.join(defaultConfig.CWD, 'config.js')

const config =
  () =>
    fs.existsSync(configPath)
      ? Object.assign(
          defaultConfig,
          require(configPath)
        )
      : defaultConfig

module.exports = config
