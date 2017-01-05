const { isFunction } = require('magic-types')
const conf = require('./config')()
const log = require('./log')

const availableTasks = {
  build: require('./build'),
  lint: require('./lint'),
  publish: require('./publish'),
}

const tasks = {}

process.argv.forEach(
  (arg) => {
    if (Object.keys(availableTasks).indexOf(arg) > -1) {
      tasks[arg] = availableTasks[arg]
    }
  }
)

if (isFunction(tasks.build)) {
  log('start build, config: \n', conf)
  tasks.build(conf)
    .then(() => console.log('build finished'))
    .then(
      () => isFunction(tasks.zip) && tasks.zip(conf)
    )
    .then(() => console.log('zip finished'))
    .then(
      () => isFunction(tasks.publish) && tasks.publish(conf)
    )
    .then(() => console.log('publish finished'))
    .catch(log.error)
}
