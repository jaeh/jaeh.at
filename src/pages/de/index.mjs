export const state = {
  lang: 'de',
  job: 'technomant',
  occupation: [
    'ich jongliere mit code seit sechszehn,',
    'mit keulen, bällen und ringen seit sechsundzwanzig',
    'und das leben mit mir seit etwa sechsunddreissig jahren.',
    'ich geniesse das alles.',
  ],
}

export const View = state => [
  div({ class: 'section communications' }, [
    h2('kommunikation'),

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
    h2('kongregation'),
    List([
      {
        src: '/img/congregations/bwb.png',
        title: 'bitcoiners without borders',
        to: 'https://bwb.is',
        text: [
          'eine ',
          Link({
            text: 'dezentrale autonome organisation',
            to: 'https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization',
          }),
          ' gegründet 2011. wir arbeiten in und an dezentralen systemen.',
        ],
      },
      {
        src: '/img/congregations/metalab.png',
        title: 'metalab',
        to: 'https://metalab.at',
        text: 'ein hack/make space in wien, österreich.',
      },
      {
        src: '/img/congregations/parallele.png',

        title: 'parallele polis vienna',
        to: 'https://parallele.at',
        text: 'weltweite cryptoliberationsbewegung, wiener sektion.',
      },
    ]),
  ]),

  div({ class: 'section occupations' }, [
    h2('okkupation'),

    List([
      {
        src: '/img/occupations/webboot.png',
        title: '@webboot',
        to: 'http://webboot.org',
        text: 'eine quelle von integrität für das netz.',
      },
      {
        src: '/img/occupations/magic.png',
        title: '@magic',
        to: 'http://github.com/magic/core',
        text: 'jsomorphischer jamstack generator. javascript, apis und markup.',
      },
      {
        src: '/img/occupations/grundstein.png',
        title: '@grundstein',
        to: 'https://grundstein.it',
        text: 'hosting ohne ärger. liefert statische seiten und deren apis. gebaut fuer @magic.',
      },
    ]),
  ]),
]
