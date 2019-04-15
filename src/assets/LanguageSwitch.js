const LanguageSwitch = props => Link({ ...props, class: 'LanguageSwitch' })

LanguageSwitch.style = {
  '.LanguageSwitch': {
    position: 'fixed',
    top: '0.5em',
    right: '0.5em',
    left: 'auto',
    fontSize: '0.8em',
  },
}

module.exports = LanguageSwitch
