export default vars => ({
  '::selection': {
    backgroundColor: vars.textColor,
    color: vars.backgroundColor,
    textShadow: 'none',
  },

  '*': {
    scrollbarColor: `${vars.scrollbarColor} ${vars.backgroundColor}`,
    scrollbarWidth: 'thin',
  },

  body: {
    backgroundColor: vars.backgroundColor,
    border: 0,
    color: vars.textColor,
    fontFamily:
      'Ubuntu, "Segoe UI", roboto, "Lucida Grande", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: '15px',
    fontWeight: 400,
    height: '100%',
    lineHeight: '1.6',
    margin: 0,
    overflowY: 'scroll',
    padding: 0,
    position: 'absolute',
    verticalAlign: 'baseline',
    width: '100%',
  },

  'h1, h2, h3': {
    margin: '2em 0 0',
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
    color: vars.linkColorDark,
    textDecoration: 'none',
    transition: 'box-shadow 500ms, color 500ms',
    boxShadow: `inset 0 -1px 0 0 ${vars.backgroundColor}, inset 0 -2px 0 0 ${vars.linkColorLight}`,
    textShadow: `1px 1px 0 ${vars.backgroundColor}, -1px 1px 0 ${vars.backgroundColor}, 2px 0 0 ${vars.backgroundColor}, -2px 0 0 ${vars.backgroundColor}`,

    '&:hover': {
      color: vars.linkColorLight,
      boxShadow: `inset 0 -1px 0 0 ${vars.backgroundColor}, inset 0 -2px 0 0 ${vars.linkColorDark}`,
      textShadow: `1px 1px 0 ${vars.backgroundColor}, -1px 1px 0 ${vars.backgroundColor}, 2px 0 0 ${vars.backgroundColor}, -2px 0 0 ${vars.backgroundColor}`,
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
    '.button': {
      border: `1px solid ${vars.linkColorDark}`,
      color: vars.linkColor,
      backgroundColor: vars.backgroundColor,
    },
  },

  '@media screen and (min-width: 800px)': {
    body: {
      textAlign: 'left',
      fontSize: '18px',
    },

    '.Footer': {
      margin: '5em 0 2em',
    },
  },
})
