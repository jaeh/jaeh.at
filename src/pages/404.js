module.exports = {
  state: {
    title: '404 - not found',
  },

  View: () => [
    Header({
      job: 'technomancer',
      description: [
        'i juggle with code since sixteen,',
        'with cones, balls and rings since twentysix,',
        'and life juggles with me since around thirtysix years.',
        'i enjoy all of it.',
      ],
    }),
    div([
      h3('404 - page not found.'),
      p('Unfortunately, there is nothing here but nothingness.'),
      p([Link({ to: '/' }, 'Click here'), ' to get back to safety']),
    ]),
  ],
}
