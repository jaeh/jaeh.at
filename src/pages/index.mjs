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
        src: '/img/congregations/thesystemcollective.png',
        title: 'TheSystemCollective',
        to: 'https://thesystem.at',
        text: 'artist collective, building an artificial museum.',
      },
      {
        src: '/img/congregations/metalab.png',
        title: 'metalab',
        to: 'https://metalab.at',
        text: 'a hack/make space in vienna, austria.',
      },
      {
        src: '/img/congregations/bwb.png',
        title: 'bitcoiners without borders',
        to: 'https://bwb.is',
        text: [
          'is a ',
          Link({
            text: 'DAO',
            title: '(decentralized autonomous organization)',
            to: 'https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization',
          }),
          ' founded in 2011, working in and on decentralized systems.',
        ],
      },
      {
        src: '/img/congregations/parallele.png',
        title: 'parallele polis vienna',
        to: 'https://www.parallele.at',
        text: 'cryptoliberation community, viennese fork.',
      },
    ]),
  ]),

  div({ class: 'section occupations' }, [
    h2('occupations'),
    List([
      {
        src: '/img/occupations/artificialmuseum.png',
        title: 'Artificial Museum',
        to: 'https://artificialmuseum.com',
        text: 'Our mission is to create, procure, research, disseminate and conserve (digital) art.',
      },
      {
        src: '/img/occupations/magic.png',
        title: 'magic',
        to: 'https://magic.github.io',
        text: 'jsomorphic jamstack generator.',
      },
      {
        src: '/img/occupations/grundstein.png',
        title: 'grundstein',
        to: 'https://grundstein.it',
        text: 'serves static pages and their apis. built for magic.',
      },
      {
        src: '/img/occupations/webboot.png',
        title: 'webboot',
        to: 'https://webboot.org',
        text: 'a source of integrity for the web.',
      },
    ]),
  ]),
]
