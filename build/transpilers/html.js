// html builders
const pug = require('pug')
const htmlMinify = require('html-minifier').minify

const conf = require('../config')()

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
    const config = Object.assign(
      {},
      conf,
      { basedir: conf.HTML_DIR }
    )

    pug.render(buffer, config, (err, html) => {
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

module.exports = TRANSPILE_HTML
