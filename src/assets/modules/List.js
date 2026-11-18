export const View = (items = [], children = []) =>
  ul(
    { class: 'List' },
    [...items, ...children].map(({ name, width = 60, height = 60, title, to, text }) => [
      li([
        name && div(Picture({ width, height, name, ext: 'png' })),
        title && div([h3([to ? Link({ to }, title) : title]), P(text)]),
      ]),
    ]),
  )

export const style = vars => ({
  width: '100%',

  li: {
    margin: '0 0 2em',
  },

  h3: {
    margin: 0,
    padding: 0,
    lineHeight: 1,
    margin: '0 0 0.5em',
    color: vars.link.dark,

    '.light &&': {
      color: vars.link.light,
    },
  },

  img: {
    clear: 'left',
    float: 'left',
    margin: '0 1em 0.2em 0',
    height: 'auto',
  },
})
