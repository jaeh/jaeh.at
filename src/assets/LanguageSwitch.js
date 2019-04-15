const LanguageSwitch = props => Link({ ...props, class: 'LanguageSwitch' })

LanguageSwitch.style = {
  '.LanguageSwitch': {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 'auto',
  },
}

module.exports = LanguageSwitch