export const View = (title = 'communications') =>
  div({ class: 'section communications' }, [
    h2(title),
    ul([
      li(['email: ', Link({ to: 'mailto:jascha@jaeh.at', text: 'jascha@jaeh.at' })]),
      li(['github: ', Link({ to: 'https://github.com/jaeh', text: '@jaeh' })]),
      li(['gitlab: ', Link({ to: 'https://gitlab.com/jaeh', text: '@jaeh' })]),
      li(['keybase: ', Link({ to: 'https://keybase.io/jascha', text: 'jascha' })]),
      li(['twitter: ', Link({ to: 'https://twitter.com/weirdpress', text: '@weirdpress' })]),
      li([
        'facebook: ',
        Link({ to: 'https://facebook.com/jascha.ehrenreich', text: 'jascha.ehrenreich' }),
      ]),
    ]),
  ])
