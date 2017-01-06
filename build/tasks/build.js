const fs = require('fs-extra')
const chokidar = require('chokidar')
const browserSync = require('browser-sync')
const path = require('path')

const log = require('../log')
const conf = require('../config')()

const mkdirSync =
  (path) => {
    try {
      fs.mkdirSync(path)
    }
    catch(e) {
      if (e.code !== 'EEXIST') {
        throw e
      }
    }
  }

const getFileContent =
  file =>
    new Promise((resolve, reject) => {
      const { name } = file

      fs.readFile(name, (err, buffer) => {
        if (err) {
          reject(err)
          return
        }

        const out = name.replace(conf.BUNDLE_DIR, conf.OUT_DIR)
        resolve({ name, buffer, out })
      })
    })
    .catch(log.error)

const transpileFile =
  file =>
    new Promise((resolve, reject) => {
      const { name, buffer, out } = file
      const typeArray = name.split('.')
      const type = typeArray[typeArray.length - 1]

      const transpiler = conf[`TRANSPILE_${ type.toUpperCase() }`]
      if (typeof transpiler === 'function') {
        new Promise((res, rej) => {
          const bundler = Object.assign(
            {},
            file,
            { resolve: res, reject: rej, buffer }
          )
          transpiler(bundler)
        })
        .then(bundle => resolve(Object.assign({}, file, { bundle })))
        .catch(reject)

        return
      }

      // transpiler does not exist, just return stringified buffer as bundle
      resolve(Object.assign(
        {},
        file,
        { bundle: buffer }
      ))
    })
    .catch(log.error)

const fileCache = {}

const writeFile =
  file => {
    const { name, buffer, bundle, out } = file

    // no changes, resolve
    if (fileCache[out] && fileCache[out].content === buffer.toString()) {
      return file
    }

    // write file to "cache"
    fileCache[out] = file

    // write file to disk
    return new Promise((resolve, reject) => {
      // create directory for file if it does not exist
      const outDir = out.split('/').slice(0, -1).join('/')
      mkdirSync(outDir)

      fs.writeFile(out, bundle, (err) => {
        if (err) {
          reject(err)
          return
        }

        log.success('writeFile', out)

        resolve(file)
      })
    })
    .catch(log.error)
  }

const prepareData =
  args =>
    new Promise(res => res(args))

const handleWatchUpdate =
  ({ event, name, initDone, devWatcher }) => {
    console.log({ event, name })
    if (name.indexOf(conf.BUNDLE_DIR) < 0) {
      if (initDone) {
        log('stopping watcher', name)
        devWatcher.close()
        watcher()
      }
      return
    }

    // gets called on first run of watch dir indexing
    if (event === 'add' || event === 'change') {
      prepareData({ name })
        .then(getFileContent)
        .then(transpileFile)
        .then(writeFile)
        .catch(log.error)

      return
    }

    if (event === 'addDir') {
      mkdirSync(name)

      return
    }

    log('Unhandled watch event:', { event, name })
  }

const watcher =
  (resolve, reject) => {
    log('Watching', conf.SRC_DIR)

    let initDone = false

    const devWatcher = chokidar.watch(
      conf.SRC_DIR,
      {
        ignored: [
          '**/node_modules/**',
          '**/public/**',
          '**/public',
          '**/.git/**',
        ],
      }
    )

    devWatcher
      .on('all', (event, name) =>
        handleWatchUpdate({ event, name, devWatcher, initDone, conf })
      )
      .on('ready', () => {
        initDone = true

        if (conf.noWatch && conf.noServe) {
          devWatcher.close()
          resolve()
        }
      })
  }

const serve =
  () => {
    const bsConfig = {
      server: {
        baseDir: conf.OUT_DIR,
        files: conf.OUT_DIR,
        // directory: true,
        index: 'index.html',
      },
      open: false,
    }

    browserSync(bsConfig, (err, bs) => {
      const url = bs.options.getIn(["urls", "local"])
      log.success('server listening to http://', url)
    })
  }

const build =
  () =>
    new Promise((resolve, reject) => {
      // actually run the app:
      console.log('start watching')
      watcher(resolve, reject)

      if (conf.SERVE && !conf.noServe) {
        serve(conf)
      }
    })

module.exports = build
