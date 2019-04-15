module.exports = {
  View: (state, actions) => [
    Header({ job: 'technomant', description: [
      'ich jongliere mit code seit sechszehn,',
      'mit keulen, bällen und ringen seit sechsundzwanzig',
      'und das leben jongliert mit mir seit ungefähr sechsunddreissig jahren.',
      'ich geniesse das alles.',
    ] }),
    LanguageSwitch({ text: 'english', to: '/' }),
    div({ class: 'section communications' }, [
      h2('kommunikation'),
      ul([
        li([
          span('email: '),
          Link({ href: 'mailto:jascha@jaeh.at' }, [
            'jascha',
            span({ class: 'at' }, '@'),
            'jaeh.at',
          ]),
        ]),
        li([
          span('github: '),
          Link(
            {
              href: 'https://github.com/jaeh',
              rel: 'nofollow noopener',
              target: 'github-jaeh',
            },
            [span({ class: 'at' }, '@'), 'jaeh'],
          ),
        ]),

        li([
          span('keybase: '),
          Link(
            {
              href: 'https://keybase.io/jascha',
              rel: 'nofollow noopener',
              target: 'keybase-jascha',
            },
            [span({ class: 'at' }, '@'), 'jascha'],
          ),
        ]),
        li([
          span('twitter: '),
          Link(
            {
              href: 'https://twitter.com/weirdpress',
              rel: 'nofollow noopener',
              target: 'twitter-weirdpress',
            },
            [span({ class: 'at' }, '@'), 'weirdpress'],
          ),
        ]),
      ]),
    ]),

    div({ class: 'section congregations' }, [
      h2('kongregation'),
      ul([
        li([
          h3([
            Link(
              {
                href: 'http://wizardsatwork.at',
                rel: 'noopener',
                target: 'wizardsatwork',
              },
              ['wizards', span({ class: 'add' }, '@'), 'work'],
            ),
          ]),
          p(
            'wir sind ein stamm von erfindern, programmierern, philosophen, aktivisten, hackern, künstlern, clowns und wissenschafltern,',
          ),
          p('wir sind wizards & witches @ work, unsere magie transformiert paradigmen.'),
        ]),
        li([
          h3([
            Link(
              {
                href: 'https://metalab.at',
                rel: 'noopener',
                target: 'metalab',
              },
              'metalab',
            ),
          ]),
          p('das metalab ist ein hack/make space in wien, österreich.'),
        ]),
        li([
          h3([
            Link(
              {
                href: 'https://bwb.is',
                rel: 'noopener',
                target: 'bwb',
              },
              'bitcoiners without borders',
            ),
          ]),
          p('wir arbeiten seit 2012 an und in dezentralisierten systemen.'),
          p([
            'zb. verwaltung der ',
            Link(
              {
                href: 'https://bitcoinfoundation.org',
                rel: 'nofollow noindex noopener',
                target: '_blank',
              },
              'bitcoinfoundation',
            ),
            ' webproperties von 2012-2014.',
          ]),
        ]),
      ]),
    ]),

    div({ class: 'section occupations' }, [
      h2('projekte'),
      ul([
        li([
          h3([
            Link(
              {
                href: 'http://magicshifter.net',
                rel: 'noopener',
                target: 'magicshifter',
              },
              'magicshifter',
            ),
          ]),
          p(
            'open source hardware gadget für licht-, spiel-, sound- und persistente wahrnehmungs anwendungen.',
          ),
        ]),
        li([
          h3([
            Link(
              {
                href: 'http://screeninvader.com/',
                rel: 'noopener',
                target: 'screeninvader',
              },
              'screeninvader',
            ),
          ]),
          p('kollaboratives internetzsurfen, videoschaun oder bilder browsen.'),
        ]),
        li([
          h3([
            Link(
              {
                href: 'http://github.com/magic/core',
                rel: 'nofollow noindex noopener',
                target: 'magic',
              },
              'magic',
            ),
          ]),
          p('magische generation von statischen und serverlosen webseiten.'),
        ]),
      ]),
    ]),
  ],
}
