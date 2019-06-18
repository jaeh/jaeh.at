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
      li([
        span('email: '),
        Link({ href: 'mailto:jascha@jaeh.at' }, ['jascha', span({ class: 'at' }, '@'), 'jaeh.at']),
      ]),
      li([
        span('github: '),
        Link(
          {
            href: 'https://github.com/jaeh',
            nofollow: true,
          },
          [span({ class: 'at' }, '@'), 'jaeh'],
        ),
      ]),

      li([
        span('keybase: '),
        Link(
          {
            href: 'https://keybase.io/jascha',
            nofollow: true,
          },
          [span({ class: 'at' }, '@'), 'jascha'],
        ),
      ]),

      li([
        span('twitter: '),
        Link(
          {
            href: 'https://twitter.com/weirdpress',
            nofollow: true,
            noreferrer: true,
          },
          [span({ class: 'at' }, '@'), 'weirdpress'],
        ),
      ]),

      li([
        span('mastodon: '),
        Link(
          {
            href: 'https://anarchism.space/@jaeh',
            rel: 'nofollow noopener',
            target: 'mastodon-jaeh',
            rel: 'me',
          },
          [span({ class: 'at' }, '@'), 'jaeh'],
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
              nofollow: true,
              noreferrer: true,
            },
            'bitcoinfoundation',
          ),
          ' webproperties von 2012-2014.',
        ]),
      ]),
    ]),
  ]),

  div({ class: 'section occupations' }, [
    h2('okkupation'),
    ul([
      li([
        h3([
          Link(
            {
              href: 'http://magicshifter.net',
            },
            'magicshifter',
          ),
        ]),
        p([
          'open source hardware gadget für lichtmagie, spieltriebbefriedigung,',
          ' und soundanwendungen.',
          ' überlistet die persistente wahrnehmung.',
        ]),
      ]),
      li([
        h3([
          Link(
            {
              href: 'http://screeninvader.com/',
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
            },
            'magic',
          ),
        ]),
        p('magische generation von statischen und serverlosen webseiten.'),
      ]),
    ]),
  ]),

  LanguageSwitch(state),
]
