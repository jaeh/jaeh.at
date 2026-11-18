export const View = () =>
  div({ class: 'HeaderImage' }, [
    Picture({
      alt: '',
      class: 'Face',
      role: 'presentation',
      name: '/img/jascha.ehrenreich',
      ext: 'jpg',
    }),
    Picture({
      alt: '',
      class: 'Body',
      role: 'presentation',
      name: '/img/jascha.ehrenreich.body',
      ext: 'jpg',
    }),
  ])

export const style = {
  borderRadius: '10%',
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
  },

  picture: {
    '&:nth-child(2)': {
      img: {
        background: 'red',
        left: 0,
        opacity: 0,
        position: 'absolute',
        top: 0,
      },
    },
  },

  '&:hover': {
    picture: {
      '&:first-child': {
        img: {
          opacity: 0,
        },
      },
      '&:nth-child(2)': {
        img: {
          opacity: 1,
        },
      },
    },
  },
}
