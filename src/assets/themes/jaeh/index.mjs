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

export const vars = {
  black: '#010101',
  white: '#FEFEFE',
  text: {
    dark: '#DEDEDE',
    light: '#323232',
  },
  background: {
    dark: '#232323',
    light: '#FEFEFE',
  },
  link: {
    dark: '#F90',
    light: '#E76402',

    hover: {
      dark: '#E76402',
      light: '#F90',
    },
  },

  borderColor: '#F57C00',
  maxWidth: '1200px',
  scrollbarColor: '#C55400',
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
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
      backgroundColor: v.text.dark,
      color: v.background.dark,
      textShadow: 'none',
    },

    '*': {
      boxSizing: 'border-box',
      scrollbarColor: `${v.scrollbarColor} ${v.background.dark}`,
      scrollbarWidth: 'thin',
    },

    body: {
      border: 0,
      fontFamily: `
        -apple-system,
        BlinkMacSystemFont,
        avenir next,
        avenir,
        helvetica neue,
        helvetica,
        Ubuntu,
        roboto,
        noto,
        segoe ui,
        arial,
        sans-serif
      `
        .trim()
        .replace(/\n/gim, ' ')
        .replace(/\s{2,}/g, ' '),
      fontSize: '18px',
      fontWeight: 400,
      height: '100vh',
      lineHeight: '1.6',
      margin: 0,
      overflowY: 'scroll',
      padding: 0,
      position: 'absolute',
      width: '100%',
    },

    '#Magic': {
      backgroundColor: v.background.dark,
      color: v.text.dark,
      height: 'auto',
      padding: '5vh 0 0',
      transition: 'background-color 500ms, color 500ms',

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
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
      fontSize: '1.1em',
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
      color: v.link.dark,
      textDecoration: 'none',
      boxShadow: `inset 0 -1px 0 0 ${v.background.dark}, inset 0 -2px 0 0 ${v.link.light}`,
      textShadow: `1px 1px 0 ${v.background.dark}, -1px 1px 0 ${v.background.dark}, 2px 0 0 ${v.background.dark}, -2px 0 0 ${v.background.dark}`,
      transition: 'box-shadow 500ms, color 500ms, text-shadow 500ms',

      '&:hover': {
        color: v.link.light,
        boxShadow: `inset 0 -1px 0 0 ${v.background.dark}, inset 0 -2px 0 0 ${v.link.dark}`,
      },

      '.light &&': {
        color: v.link.light,
        boxShadow: `inset 0 -1px 0 0 ${v.background.light}, inset 0 -2px 0 0 ${v.link.light}`,
        textShadow: `1px 1px 0 ${v.background.light}, -1px 1px 0 ${v.background.light}, 2px 0 0 ${v.background.light}, -2px 0 0 ${v.background.light}`,

        '&:hover': {
          color: v.link.dark,
          boxShadow: `inset 0 -1px 0 0 ${v.background.light}, inset 0 -2px 0 0 ${v.link.dark}`,
        },
      },
    },

    ul: {
      listStyle: 'none',

      '.congregations, .occupations &&': {
        li: {
          margin: '0 0 2em',
        },

        h3: {
          lineHeight: 1,
          margin: '0 0 0.5em',
        },

        img: {
          clear: 'left',
          float: 'left',
          margin: '0 1em 1em 0',
          height: 'auto',
        },
      },
    },

    '.section': {
      clear: 'both',
      margin: '2em 0 1em',

      h2: {
        margin: '2em 0 1em',
      },

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
    },

    '.NoSpy': {
      '.icon': {
        position: 'fixed',
        left: 'auto',
        right: '0.5em',
        bottom: '0.5em',
      },

      '.ShowHide': {
        height: '1.5em',
        width: '1.5em',
        left: 'auto',
        right: '1em',
      },
      '.button': {
        border: `1px solid ${v.link.dark}`,
        color: v.linkColor,
        backgroundColor: v.background.dark,
      },
    },

    '.LightSwitch': {
      left: 'auto',
      right: '0.5em',
    },

    '.Footer': {
      fontSize: '1em',
      margin: '5em 0 0',
      width: '100%',
    },

    '@media screen and (min-width: 800px)': {
      body: {
        textAlign: 'left',
        fontSize: '20px',
      },

      '.Footer': {
        margin: '5em 0 0',
      },
    },
  }
}
