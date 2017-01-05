const path = require('path')

// css builders
const stylus = require('stylus')
const nib = require('nib')
const autoprefixer = require('autoprefixer-stylus')
const cssnano = require('cssnano')
// const stylint = require('stylint')

const conf = require('../config')()

// stylus build task
const style =
  string =>
    stylus(string)
      .set('paths', [conf.CSS_DIR])
      .set('sourcemap', {})
      .use(nib())
      .use(autoprefixer())
      .import(path.join(conf.CSS_DIR, 'variables'))

const TRANSPILE_CSS =
  ({ buffer, name, resolve, reject }) => {
    const string = buffer.toString()
    style(string).render(
      (err, css) => {
        if (err) {
          reject(err)
        }

        if (conf.ENV !== 'production') {
          resolve(css)
          return
        }

        cssnano
          .process(css)
          .then(
            result => {
              resolve(result.css)
            }
          )
          .catch(console.error)
      })
  }

module.exports = TRANSPILE_CSS
