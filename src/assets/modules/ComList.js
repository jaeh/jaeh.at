export const View = (title = 'communications') =>
  div({ class: 'section communications' }, [
    h2(title),
    ul([
      li(['email: ', Link({ to: 'mailto:jascha@jaeh.at', text: 'jascha@jaeh.at' })]),
      li(['github: ', Link({ to: 'https://github.com/jaeh', text: 'jaeh' })]),
      li(['gitlab: ', Link({ to: 'https://gitlab.com/jaeh', text: 'jaeh' })]),
      li(['npm: ', Link({ to: 'https://www.npmjs.com/~jascha', text: 'jascha' })]),
      li(['keybase: ', Link({ to: 'https://keybase.io/jascha', text: 'jascha' })]),
      li(['twitter: ', Link({ to: 'https://twitter.com/weirdpress', text: 'weirdpress' })]),
      li(['mastodon: ', Link({ to: 'https://chaos.social/@jaeh', text: '@jaeh@chaos.social' })]),
    ]),
  ])
