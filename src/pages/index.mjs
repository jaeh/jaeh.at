export const state = {
  job: 'technomancer',
  occupation: [
    'i juggle with code since eighteen,',
    'with cones, balls and rings since twentyeight,',
    'and life juggles with me since around thirtyeight years.',
    'i enjoy all of it.',
  ],
}

export const View = state => [
  div({ class: 'section communications' }, [
    h2('communications'),
    ul([
      li(['email: ', Link({ to: 'mailto:jascha@jaeh.at', text: 'jascha@jaeh.at' })]),
      li(['github: ', Link({ to: 'https://github.com/jaeh', text: '@jaeh' })]),
      li(['gitlab: ', Link({ to: 'https://gitlab.com/jaeh', text: '@jaeh' })]),
      li(['keybase: ', Link({ to: 'https://keybase.io/jascha', text: 'jascha' })]),
      li(['twitter: ', Link({ to: 'https://twitter.com/weirdpress', text: '@weirdpress' })]),
      li([
        'facebook: ',
        Link({ to: 'https://facebook.com/jascha.ehrenreich', text: '/jascha.ehrenreich' }),
      ]),
    ]),
  ]),

  div({ class: 'section congregations' }, [
    h2('congregations'),
    List([
      {
        src: '/img/congregations/bwb.png',
        title: 'bitcoiners without borders',
        to: 'https://bwb.is',
        text: [
          'a ',
          Link({
            text: 'decentralized autonomous organization',
            to: 'https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization',
          }),
          ' founded in 2011, working in and on decentralized systems.',
        ],
      },

      {
        src: '/img/congregations/metalab.png',
        title: 'metalab',
        to: 'https://metalab.at',
        text: 'a hack/make space in vienna, austria.',
      },
      {
        src: '/img/congregations/parallele.png',
        title: 'parallele polis vienna',
        to: 'https://parallele.at',
        text: 'cryptoliberation community, viennese fork.',
      },
    ]),
  ]),

  div({ class: 'section occupations' }, [
    h2('occupations'),
    List([
      {
        src: '/img/occupations/webboot.png',
        title: 'webboot',
        to: 'https://webboot.org',
        text: 'a source of integrity for the web.',
      },
      {
        src: '/img/occupations/magic.png',
        title: 'magic',
        to: 'https://magic.github.io',
        text: 'jsomorphic jamstack generator. javascript, apis and markup.',
      },
      {
        src: '/img/occupations/grundstein.png',
        title: 'grundstein',
        to: 'https://grundstein.it',
        text: 'hosting without hassle. serves static pages and their apis. built for magic.',
      },
    ]),
  ]),
]
