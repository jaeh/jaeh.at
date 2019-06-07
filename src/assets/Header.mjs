export const View = ({ job, occupation }) =>
  header({ class: 'Header' }, [
    HeaderImage(),

    div({ class: 'HeaderText' }, [
      h1([Link({ to: '/' }, 'jascha ehrenreich')]),

      job && h2(job),
      occupation && div(occupation.map(a => p(a))),
    ]),
  ])

export const style = {
  display: 'inline-block',
  margin: '0 0 .5em',
  width: '100%',

  'h1, h2': {
    margin: 0,
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
