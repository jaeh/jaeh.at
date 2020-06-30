export const state = {
  lang: 'de',
  job: 'technomant',
  description: [
    'ich jongliere mit code seit zwanzig,',
    'mit keulen, bällen und ringen seit dreissig',
    'und das leben mit mir seit etwa vierzig jahren.',
    'ich geniesse das alles.',
  ],
}

export const View = state => [
  ComList('kommunikation'),

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
