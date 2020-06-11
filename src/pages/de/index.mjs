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

    ul([
      li([
        img({ width: 60, height: 60, src: '/img/congregations/bwb.png' }),
        h3(Link({ text: 'bitcoiners without borders', to: 'https://bwb.is' })),
        p([
          'eine ',
          Link({
            text: 'dezentrale autonome organisation',
            to: 'https://en.wikipedia.org/wiki/Decentralized_Autonomous_Organization',
          }),
          ' gegründet 2011.',
        ]),
      ]),
      li([
        img({ width: 60, height: 60, src: '/img/congregations/metalab.png' }),
        h3(Link({ text: 'metalab', to: 'https://metalab.at' })),
        p('ein hack/make space in wien, österreich.'),
      ]),
      li([
        img({ width: 60, height: 60, src: '/img/congregations/parallele.png' }),

        h3(Link({ text: 'parallele polis vienna', to: 'https://parallele.at' })),
        p('weltweite cryptoliberationsbewegung, wiener sektion.'),
      ]),
    ]),
  ]),

  div({ class: 'section occupations' }, [
    h2('okkupation'),

    ul([
      li([
        img({ width: 60, height: 60, src: '/img/occupations/webboot.png' }),
        h3(Link({ text: '@webboot', to: 'http://webboot.org' })),
        p('eine quelle von integrität für das netz.'),
      ]),
      li([
        img({ width: 60, height: 60, src: '/img/occupations/magic.png' }),
        h3(Link({ text: '@magic', to: 'http://github.com/magic/core' })),
        p('jsomorphischer jamstack generator. javascript, apis und markup.'),
      ]),
      li([
        img({ width: 60, height: 60, src: '/img/occupations/grundstein.png' }),
        h3(Link({ text: '@grundstein', to: 'https://grundstein.it' })),
        p('hosting ohne &auml;rger. liefert statische seiten und deren apis. gebaut fuer @magic.'),
      ]),
    ]),
  ]),
]
