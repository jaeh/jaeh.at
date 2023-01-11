export const state = {
  lang: 'de',
  job: 'technomant und artivist',
  description: [
    'ich jongliere mit code seit zwanzig,',
    'mit keulen, bällen und ringen seit dreissig',
    'und das leben mit mir seit etwa vierzig jahren.',
    'ich geniesse das alles.',
  ],
}

export const View = () => [
  ComList('kommunikation'),

  div({ class: 'section congregations' }, [
    h2('kongregation'),
    List([
      {
        src: '/img/congregations/thesystemcollective.png',
        title: 'SystemKollektiv',
        to: 'https://thesystem.at',
        text: [
          'künstlerinnenkollektiv, wir errichten das Artificial Museum.',
          'unsere aufgabe ist die erschaffung, beschaffung, erforschung, verbreitung und bewahrung von (digitaler) kunst.',
        ],
      },
      {
        src: '/img/congregations/metalab.png',
        title: 'metalab',
        to: 'https://metalab.at',
        text: 'ein hack/make space in wien, österreich.',
      },
      {
        src: '/img/congregations/bwb.png',
        title: 'bitcoiners without borders',
        to: 'https://bwb.is',
        text: [
          [
            'eine ',
            Link({
              text: 'DAO',
              title: '(dezentrale autonome organisation)',
              to: 'https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization',
            }),
            ', gegründet 2011. wir arbeiten in und an dezentralen systemen.',
          ],
        ],
      },
    ]),
  ]),

  div({ class: 'section occupations' }, [
    h2('okkupation'),

    List([
      {
        src: '/img/occupations/artificialmuseum.png',
        title: 'Artificial Museum',
        to: 'https://artificialmuseum.com',
        text: 'web-basiertes augmented reality museum im weltweiten öffentlichen raum.',
      },
      {
        src: '/img/occupations/magic.png',
        title: '@magic',
        to: 'https://github.com/magic/core/',
        text: [
          'jsomorphischer jamstack generator. javascript, apis und markup.',
          'generiert statisches html und css, addiert eine kleine menge javascript (~10kb), welches reaktive webapplikationen ermöglicht.',
        ],
      },
      {
        src: '/img/occupations/grundstein.png',
        title: '@grundstein',
        to: 'https://grundstein.github.io/',
        text: [
          [
            'server framework, erwartet ein debian / ubuntu basiertes linux',
            ' bash und ssh auf dem server,',
            ' alles andere wird via konfiguration deklariert',
            ' und von grundstein automatisiert installiert und gestartet.',
          ],
          'die von grundstein bereitgestellten services erlauben das hosten von statischen seiten, apis, optional sind osc, websocket sowie streaming (video und audio) möglich.',
          'grundstein ist spezialisiert auf die bedürfnisse von magic, webboot und dem Artificial Museum.',
        ],
      },
      {
        src: '/img/occupations/webboot.png',
        title: '@webboot',
        to: 'https://webboot.org',
        text: 'eine quelle von integrität für das netz. unfertig. freie software. kontaktiere mich einfach, wenn du dran hacken willst.',
      },
    ]),
  ]),
]
