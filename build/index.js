const { isFunction } = require('magic-types')
const conf = require('./config')()
const log = require('./log')

const tasks = require('./tasks')

if (conf.TASKS.BUILD) {
  log('start build, config: \n', conf)
  tasks.build(conf)
    .then(() => console.log('build finished'))
    .then(
      () => conf.TASKS.ZIP && tasks.zip(conf)
    )
    .then(() => console.log('zip finished'))
    .then(
      () => conf.TASKS.PUBLISH && tasks.publish(conf)
    )
    .then(() => console.log('publish finished'))
    .catch(log.error)
}
