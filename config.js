const path = require('path')

const { TRANSPILE_HTML, TRANSPILE_CSS } = require('./build/transpilers')

const GIT_BRANCH = 'master'

module.exports = {
  TRANSPILE_HTML,
  TRANSPILE_CSS,
  GIT_BRANCH,
}
