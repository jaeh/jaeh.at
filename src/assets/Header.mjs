export const Header = state =>
  div({ class: 'Header' }, [
    Header.Image(),

    div({ class: 'HeaderText' }, [
      h1([Link({ to: '/' }, 'jascha ehrenreich')]),

      state.job && h2(state.job),

      state.occupation && div(state.occupation.map(a => p(a))),
    ]),
  ])

Header.style = {
  '.Header': {
    display: 'inline-block',
    margin: '0 0 .5em',
    width: '100%',

    'h1, h2': {
      margin: 0,
    },
  },

  '@media screen and (min-width: 800px)': {
    '.HeaderImage': {
      float: 'left',
      height: '29vw',
      margin: '0 2em 3em 0',
      width: '29vw',
    },
    '.HeaderText': {
      float: 'left',
    },
  },
}

Header.Image = () => div({ class: 'HeaderImage' }, [
  img({
    alt: '',
    class: 'Face',
    role: 'presentation',
    src: '/img/jascha.ehrenreich.jpg',
  }),
  img({
    alt: '',
    class: 'Body',
    role: 'presentation',
    src: '/img/jascha.ehrenreich.body.jpg',
  }),
])

Header.Image.style = {
    borderRadius: '10%',
    boxShadow: '0 0 2em black',
    display: 'block',
    height: '59vw',
    margin: '0 0 1.5em',
    position: 'relative',
    width: '59vw',
    maxWidth: '200px',
    maxHeight: '200px',

    img: {
      borderRadius: '10%',
      height: '100%',
      transition: 'opacity .3s',
      width: '100%',

      '&:nth-child(2)': {
        left: 0,
        opacity: 0,
        position: 'absolute',
        top: 0,
      },
    },

    '&:hover': {
      img: {
        '&:first-child': {
          opacity: 0,
        },
        '&:nth-child(2)': {
          opacity: 1,
        },
      },
    },
}

export default Header