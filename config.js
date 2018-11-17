const path = require('path')

const HTML = require('@mspg/transpile-pug')
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
    'i juggle with code since fifteen,',
    'with cones, balls and rings since twentyfive,',
    'and life juggles with me since around thirtyfive years.',
    'i enjoy all of it.',
  ],
  year,
  IGNORE_EXTENSIONS: ['ai', 'psd', 'xcf'],
}
