const path = require('path')

// css builders
const stylus = require('stylus')
const nib = require('nib')
const autoprefixer = require('autoprefixer-stylus')
const cssnano = require('cssnano')
// const stylint = require('stylint')

// html builders
const pug = require('pug')
const htmlMinify = require('html-minifier').minify

const config = require('./config')
const conf = config()

// stylus build task
const style =
  string =>
    stylus(string)
      .set('paths', [conf.CSS_DIR])
      .set('sourcemap', {})
      .use(nib())
      .use(autoprefixer())
      .import(path.join(conf.CSS_DIR, 'variables'))

// add pug stylus filter
pug.filters.stylus =
  (str, options) => {
    let ret
    str = str.replace(/\\n/g, '\n')

    style(str).render(
      (err, css) => {
        if (err) {
          throw err
        }

        ret = css.replace(/\n/g, '')
      }
    )

    return ret
  }

const TRANSPILE_HTML =
  ({ buffer, resolve, reject }) => {
    pug.render(buffer, { basedir: conf.HTML_DIR }, (err, html) => {
      if (err) {
        console.error(err)
        reject(err)
      }

      if (conf.ENV !== 'production') {
        resolve(html)
      }

      resolve(htmlMinify(html))
    })
  }

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

module.exports = {
  TRANSPILE_CSS,
  TRANSPILE_HTML,
}
