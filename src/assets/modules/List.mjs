export const View = (items, children = []) =>
  console.log(items, children) ||
  ul(
    { class: 'List' },
    (items && items.length ? items : children).map(i => [
      li([
        Img({ src: i.img, height: '90', width: '90' }),
        div([h4(Link({ to: i.to }, i.title)), p(i.text)]),
      ]),
    ]),
  )

export const style = {
  width: '100%',

  li: {
    clear: 'both',
    display: 'inline-block',
    margin: '0.5em 0',
    width: '100%',

    h4: {
      lineHeight: 1,
      padding: 0,
    },
  },

  img: {
    borderRadius: '.5em',
    float: 'left',
    margin: '0 1em 0 0',
    maxWidth: '90px',
  },

  '@media screen and (min-width: 600px)': {
    li: {
      clear: 'none',
      width: '49%',
    },
  },

  '@media screen and (min-width: 850px)': {
    li: {
      width: '33%',
    },
  },
}
