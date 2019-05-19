export const View = () =>
  div({ class: 'Footer main' }, [
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
  ])

export const style = {
  '.Footer': {
    display: 'inline-block',
    margin: '3em 0 1em',

    span: {
      display: 'block',
      lineHeight: '1.3',
    },
  },

  '@media screen and (min-width: 500px)': {
    '.Footer': {
      span: {
        display: 'inline',
      },
    },
  },
}
