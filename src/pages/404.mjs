export const View = state => [
  h3(state.title),
  p(state.description),
  p([Link({ to: '/' }, 'click here'), ' to get back to safety']),
]

export const state = {
  title: '404 - not found',
  description: [
    'unfortunately, there is nothing here but nothingness.',
  ],
}
