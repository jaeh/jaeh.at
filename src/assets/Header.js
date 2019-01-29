module.exports = {
  style: {
    '.header.main': {
      display: 'inline-block',
      margin: '0 0 .5em',
      width: '100%',

      'h2, h3': {
        margin: 0,
      },
    },

    '.header__image': {
      borderRadius: '10%',
      boxShadow: '0 0 2em black',
      display: 'block',
      height: '39vw',
      margin: '0 0 1.5em',
      maxHeight: '210px',
      maxWidth: '210px',
      position: 'relative',
      width: '39vw',

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
    },

    '@media screen and (min-width: 800px)': {
      body: {
        '.header__image': {
          float: 'left',
          height: '29vw',
          margin: '0 2em 3em 0',
          width: '29vw',
        },
      },
    },
  },

  View: state =>
    div({ class: 'header main' }, [
      div({ class: 'header__image' }, [
        img({
          alt: '',
          class: 'face',
          role: 'presentation',
          src: '/img/jascha.ehrenreich.jpg',
        }),
        img({
          alt: '',
          class: 'body',
          role: 'presentation',
          src: '/img/jascha.ehrenreich.body.jpg',
        }),
      ]),

      div({ class: 'text' }, [
        h2([Link({ to: '/' }, 'jascha ehrenreich')]),

        h3('programmer and streetartist'),

        div({ class: 'description' }, state.description.map(s => p(s))),
      ]),
    ]),
}
