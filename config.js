const path = require('path')

const HTML = require('@mspg/transpile-posthtml')
const CSS = require('@mspg/transpile-stylus')

const year = new Date().getFullYear()

module.exports = {
  TRANSPILERS: {
    HTML,
    CSS,
  },
  FIRST_NAME: 'jascha',
  LAST_NAME: 'ehrenreich',
  JOB_DESCRIPTION: 'programmer & streetartist',
  DESCRIPTION: [
    'i juggle with code since sixteen,',
    'with cones, balls and rings since twentysix,',
    'and life juggles with me since around thirtysix years.',
    'i enjoy all of it.',
  ],
  year,
  IGNORE_EXTENSIONS: ['ai', 'psd', 'xcf'],
}
