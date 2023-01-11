export const View = (items = [], children = []) =>
  ul(
    { class: 'List' },
    [...items, ...children].map(({ name, width = 60, height = 60, title, to, text }) => [
      li([
        name && div(Picture({ width, height, name, ext: 'png' })),
        title && div([h3([Link({ to }, title)]), P(text)]),
      ]),
    ]),
  )

export const style = {
  width: '100%',

  li: {
    margin: '0 0 2em',
  },

  h3: {
    margin: 0,
    padding: 0,
    lineHeight: 1,
    margin: '0 0 0.5em',
  },

  img: {
    clear: 'left',
    float: 'left',
    margin: '0 1em 0.2em 0',
    height: 'auto',
  },
}
