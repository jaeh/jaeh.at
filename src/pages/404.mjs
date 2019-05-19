export const View = (state) => [
  h3('404 - not found.'),
  p('unfortunately, there is nothing here but nothingness.'),
  p([Link({ to: '/' }, 'click here'), ' to get back to safety']),
]

export const state = {
  title: '404 - not found',
  description: [
    'unfortunately, there is nothing here but nothingness.',
    ' i think you looked for something on https://jaeh.at and got lost.',
  ],
  job: 'technomancer',
  occupation: [
    'i juggle with code since sixteen,',
    'with cones, balls and rings since twentysix,',
    'and life juggles with me since around thirtysix years.',
    'i enjoy all of it.',
  ],
}
