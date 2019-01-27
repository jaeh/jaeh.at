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

module.exports = {
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

  a: {
    background: 'transparent',
    fontSize: '100%',
    margin: 0,
    padding: 0,
    verticalAlign: 'baseline',
  },
}
