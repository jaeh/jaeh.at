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

export default vars => ({
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

  '.Wrapper': {
    display: 'block',
    margin: '5vw 0 0',
    margin: '0 auto',
    width: '90%',
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

  '::selection': {
    backgroundColor: vars.text.dark,
    color: vars.background.dark,
    textShadow: 'none',
  },

  '*': {
    boxSizing: 'border-box',
    scrollbarColor: `${vars.scrollbarColor} ${vars.background.dark}`,
    scrollbarWidth: 'thin',
  },

  body: {
    border: 0,
    color: vars.text.dark,
    fontFamily:
      'Ubuntu, "Segoe UI", roboto, "Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '15px',
    fontWeight: 400,
    height: '100vh',
    lineHeight: '1.6',
    margin: 0,
    overflowY: 'scroll',
    padding: 0,
    position: 'absolute',
    verticalAlign: 'baseline',
    width: '100%',
  },

  '#Magic': {
    backgroundColor: vars.background.dark,
    height: 'auto',
    padding: '5vh 0 0',

    '&.light': {
      backgroundColor: vars.background.light,
    },
  },

  // html header tags

  'h1, h2, h3': {
    margin: '2em 0 0',
  },

  'h4, h5': {
    margin: '1em 0 .2em',
  },

  h1: {
    fontSize: '1.3em',
  },

  h2: {
    fontSize: '1.3em',
  },

  h3: {
    fontSize: '1.1em',
  },

  a: {
    background: 'transparent',
    fontSize: '100%',
    margin: 0,
    padding: 0,
    verticalAlign: 'baseline',
    boxShadow: `inset 0 -1px 0 0 ${vars.background.dark}, inset 0 -2px 0 0 ${vars.linkColorLight}`,
    color: vars.link.dark,
    textDecoration: 'none',
    textShadow: `1px 1px 0 ${vars.background.dark}, -1px 1px 0 ${vars.background.dark}, 2px 0 0 ${vars.background.dark}, -2px 0 0 ${vars.background.dark}`,
    transition: 'box-shadow 500ms, color 500ms',

    '&:hover': {
      color: vars.link.light,
      boxShadow: `inset 0 -1px 0 0 ${vars.background.dark}, inset 0 -2px 0 0 ${vars.link.dark}`,
      textShadow: `1px 1px 0 ${vars.background.dark}, -1px 1px 0 ${vars.background.dark}, 2px 0 0 ${vars.background.dark}, -2px 0 0 ${vars.background.dark}`,
    },
  },

  ul: {
    listStyle: 'none',
  },

  '.section': {
    clear: 'both',
    margin: '2em 0 1em',

    h3: {
      margin: '.5em 0 .2em',
    },

    '&.unlicense': {
      a: {
        display: 'inline-block',
        lineHeight: '1.1',
      },
    },
    '&.page': {
      maxWidth: '100%',
    },

    '&.communications': {
      margin: 0,

      'h2, h3': {
        margin: 0,
      },
    },
  },

  '.Gdpr': {
    left: 'auto',
    right: '0.5em',

    '.ShowHide': {
      height: '1.5em',
      width: '1.5em',
      left: 'auto',
      right: '1em',
    },
    '.button': {
      border: `1px solid ${vars.link.dark}`,
      color: vars.linkColor,
      backgroundColor: vars.background.dark,
    },
  },

  '.Footer': {
    fontSize: '1em',
    margin: '5em 0 0',
    width: '100%',
  },

  '@media screen and (min-width: 800px)': {
    body: {
      textAlign: 'left',
      fontSize: '18px',
    },

    '.Footer': {
      margin: '5em 0 0',
    },
  },
})
