export const View = state => [
  footer({ class: 'Footer' }, [
    span([
      a(
        {
          class: 'anarchy',
          href: 'http://principiadiscordia.com',
          rel: 'nofollow noopener',
          target: 'allhaileris',
          title: 'Lick here, you might be one of the lucky 23.',
        },
        'Ⓐ',
      ),

      '1982 - ',
      new Date().getFullYear(),
      ' - all rites reversed.',
    ]),

    span([' made with a few bits of ', Link({ to: 'https://github.com/magic/core' }, 'magic')]),
  ]),
]

export const style = (vars = {}) => ({
  clear: 'both',
  display: 'inline-block',
  fontSize: '.7em',
  margin: '3em 0 1em',
  textAlign: 'center',
  width: '100%',

  '.anarchy': {
    boxShadow: 'none',
    color: vars.textColor,
    fontSize: '1.1em',
    fontWeight: 800,
    textDecoration: 'none',
    textShadow: 'none',
  },

  span: {
    display: 'block',
    lineHeight: '1.3',
  },

  '@media screen and (min-width: 500px)': {
    span: {
      display: 'inline',
    },
  },
})
