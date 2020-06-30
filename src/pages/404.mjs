export const state = {
  title: '404 - not found',
  description: 'unfortunately, there is nothing here but nothingness.',
  job: 'technomancer',
  description: [
    'i juggle with code since eighteen,',
    'with cones, balls and rings since twentyeight,',
    'and life juggles with me since around thirtyeight years.',
    'i enjoy all of it.',
  ],
}

export const View = state => [
  h3(state.title),

  p(state.description),

  p([Link({ text: 'click here', to: '/' }), ' to get back to safety']),
]
