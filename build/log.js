const ENV = process.env.NODE_ENV || 'development'

const log =
  (...msgs) => {
    if (ENV === 'development') {
      console.log(...msgs)
    }
  }

log.success =
  (...msgs) => {
    if (ENV === 'development') {
      console.log('\x1b[32m', ...msgs, '\x1b[0m')
    }
  }

log.warn =
  (...msgs) =>
    console.warn('\x1b[33m', ...msgs, '\x1b[0m')

log.error =
  (...msgs) => {
    console.error('\033[31m', ...msgs, '\x1b[0m')
  }

module.exports = log
