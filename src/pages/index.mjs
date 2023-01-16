export const state = {
  job: 'technomancer and artivist',
  description: [
    'i juggle with code since twenty,',
    'with cones, balls and rings since thirty,',
    'and life juggles with me since around forty years.',
    'i enjoy all of it.',
  ],
}

export const View = state => [
  ComList(),

  div({ class: 'section congregations' }, [
    h2('congregations'),
    List([
      {
        name: 'img/congregations/systemkollektiv',
        title: 'SystemCollective',
        to: 'https://thesystem.at',
        text: [
          'artist collective, building the Artificial Museum.',
          'our mission is to create, procure, research, disseminate and conserve (digital) art.',
        ],
      },
      {
        name: 'img/congregations/metalab',
        title: 'metalab',
        to: 'https://metalab.at',
        text: 'a hack/make space in vienna, austria.',
      },
      {
        name: 'img/congregations/bwb',
        title: 'bitcoiners without borders',
        to: 'https://bwb.is',
        text: [
          // deep array to make this text not expand into multiple p elements.
          [
            'is a ',
            Link({
              text: 'DAO',
              title: '(decentralized autonomous organization)',
              to: 'https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization',
            }),
            ' founded in 2011, working in and on decentralized systems.',
          ],
        ],
      },
    ]),
  ]),

  div({ class: 'section occupations' }, [
    h2('occupations'),
    List([
      {
        name: 'img/occupations/artificialmuseum',
        title: 'Artificial Museum',
        to: 'https://artificialmuseum.com',
        text: ['web-based augmented reality museum in worldwide public space.'],
      },
      {
        name: 'img/occupations/magic',
        title: 'magic',
        to: 'https://magic.github.io',
        text: ['jsomorphic jamstack generator, javascript, api and markup. batteries included.'],
      },
      {
        name: 'img/occupations/grundstein',
        title: 'grundstein',
        to: 'https://grundstein.github.io/',
        text: [
          'the services provided by grundstein allow hosting of static pages, apis, osc, websocket and streaming of video and audio files.',
          'opinionated and purpose-built for magic, webboot and the Artificial Museum.',
        ],
      },
      {
        name: 'img/occupations/webboot',
        height: 47,
        title: 'webboot',
        to: 'https://webboot.org',
        text: 'a source of integrity for the web. unfinished. open source. dormant. contributions and feedback very welcome.',
      },
    ]),
  ]),
]
