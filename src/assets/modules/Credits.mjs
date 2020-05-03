export const View = (state, children) => [
  div({ class: 'Credits' }, [
    span([
      a(
        {
          class: 'anarchy',
          href: 'https://principiadiscordia.com/book/1.php',
          target: 'allhaileris',
          title: 'Lick here, you might be one of the lucky 23.',
        },
        'Ⓐ',
      ),

      '1982 - ',
      new Date().getFullYear(),
      ' - all rites reversed.',
    ]),
    ' made with a few bits of ',
    Link({ to: 'https://github.com/magic/core', target: '_blank', rel: 'noopener' }, 'magic'),
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
