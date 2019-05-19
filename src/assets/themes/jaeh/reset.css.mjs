const tags = `html,
h1, h2, h3,
div, p, span,
img,
ul,
li,
.article,
.section,
.header,
.footer,
.main`

const blocks = `.article,
.header,
.footer,
.section`

export default {
  [tags]: {
    background: 'transparent',
    border: 0,
    boxSizing: 'border-box',
    fontWeight: 400,
    margin: 0,
    outline: 0,
    padding: 0,
    verticalAlign: 'baseline',
  },

  [blocks]: {
    display: 'block',
  },

  '*': {
    boxSizing: 'border-box',
  },

  a: {
    background: 'transparent',
    fontSize: '100%',
    margin: 0,
    padding: 0,
    verticalAlign: 'baseline',
  },

  body: {
    minHeight: '100vh',
  },


  '#Magic': {
    margin: '0 auto',
    width: '90%',
  },

  '.Wrapper': {
    display: 'inline-block',
    margin: '5vw 0 0',
  },

  // header and menu in header
  '.Header': {
    display: 'inline-block',
    width: '90%',

    '.Logo': {
      float: 'left',
    },

    '.LogoText': {
      float: 'left',
      fontSize: '1.5em',
      margin: '.7em .2em',
    },

    '.LogoWrapper': {
      display: 'inline-block',
    },
  },

  '.Page': {
    '.Header': {
      margin: '0 0 .5em',
    },

    h1: {
      padding: '1em 0 .2em',
    },
  },

  '.Footer': {
    width: '100%',
  },

  // html header tags
  'h1, h2, h3, h4, h5': {
    margin: '1em 0 .2em',
  },
  h1: {
    fontSize: '1.3em',
  },
  h2: {
    fontSize: '1.2em',
  },
  h3: {
    fontSize: '1.1em',
  },
}
