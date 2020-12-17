export const View = (items = [], children = []) =>
  ul(
    { class: 'List' },
    [...items, ...children].map(({ src, title, to, text }) => [
      li([
        src && Img({ width: 60, height: 60, src }),
        title && div([h3([Link({ to }, title)]), p(text)]),
      ]),
    ]),
  )

export const style = {
  width: '100%',

  h3: {
    margin: 0,
    padding: 0,
  },
}
