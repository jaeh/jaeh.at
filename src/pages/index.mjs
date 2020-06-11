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
    ul([
      li([
        img({ width: '60', height: '60', src: '/img/congregations/bwb.png' }),
        h3(Link({ text: 'bitcoiners without borders', to: 'https://bwb.is' })),
        p([
          'a ',
          Link({
            text: 'decentralized autonomous organization',
            to: 'https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization',
          }),
          ' founded in 2011, working in and on decentralized systems.',
        ]),
      ]),

      li([
        img({ width: '60', height: '60', src: '/img/congregations/metalab.png' }),
        h3(Link({ text: 'metalab', to: 'https://metalab.at' })),
        p('a hack/make space in vienna, austria.'),
      ]),

      li([
        img({ width: '60', height: '60', src: '/img/congregations/parallele.png' }),
        h3(Link({ text: 'parallele polis vienna', to: 'https://parallele.at' })),
        p('cryptoliberation community, viennese fork.'),
      ]),
    ]),
  ]),

  div({ class: 'section occupations' }, [
    h2('occupations'),

    ul([
      li([
        img({ width: '60', height: '60', src: '/img/occupations/webboot.png' }),
        h3(Link({ text: 'webboot', to: 'https://webboot.org' })),
        p('a source of integrity for the web.'),
      ]),

      li([
        img({ width: '60', height: '60', src: '/img/occupations/magic.png' }),
        h3(Link({ text: 'magic', to: 'https://magic.github.io' })),
        p('jsomorphic jamstack generator. javascript, apis and markup.'),
      ]),

      li([
        img({ width: '60', height: '60', src: '/img/occupations/grundstein.png' }),
        h3(Link({ text: 'grundstein', to: 'https://grundstein.it' })),
        p('hosting without hassle. serves static pages and their apis. built for magic.'),
      ]),
    ]),
  ]),
]
