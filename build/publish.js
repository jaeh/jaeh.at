const { exec } = require('child_process')

const conf = require('./createConfig')

const gitCommand = 'git subtree push --prefix public origin gh-pages'

exec('git ')
