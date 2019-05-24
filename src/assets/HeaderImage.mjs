export const View = () =>
  div({ class: 'HeaderImage' }, [
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

export const style = {
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
