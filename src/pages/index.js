module.exports = {
  View: (state, actions) => [
    Header.View,
    LanguageSwitch({ to: '/de/', text: 'deutsch' }),
    div({ class: 'section communications' }, [
      h2('communications'),
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
      h2('congregations'),
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
            'we are a tribe of makers, programmers, engineers, philosophers, activists, hackers, artists, clowns, and scientists.',
          ),
          p('we are wizards & witches @ work, magically shifting paradigms.'),
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
          p('the metalab is a hack/make space in vienna, austria.'),
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
          p('working in and on decentralized systems since 2012.'),
          p([
            'managed the ',
            Link(
              {
                href: 'https://bitcoinfoundation.org',
                rel: 'nofollow noindex noopener',
                target: '_blank',
              },
              'bitcoinfoundation',
            ),
            ' webproperties from 2012-2014.',
          ]),
        ]),
      ]),
    ]),

    div({ class: 'section occupations' }, [
      h2('occupations'),
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
            'open source hardware gadget for lighting, gaming, sound and persistence of vision applications.',
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
          p(
            'surf the web, watch videos or browse images the way you usually do, then show it on any screen and/or projector.',
          ),
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
          p('magic static/serverless page generator.'),
        ]),
      ]),
    ]),
  ],
}
