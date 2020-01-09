export const state = {
  job: 'technomancer',
  occupation: [
    'i juggle with code since sixteen,',
    'with cones, balls and rings since twentysix,',
    'and life juggles with me since around thirtysix years.',
    'i enjoy all of it.',
  ],
}

export const View = state => [
  div({ class: 'section communications' }, [
    h2('communications'),
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
        h3([Link({ href: 'https://bwb.is' }, 'bitcoiners without borders')]),
        p('working in and on decentralized systems since 2012.'),
        p([
          'managed the ',
          Link(
            {
              href: 'https://bitcoinfoundation.org',
              nofollow: true,
              noreferrer: true,
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
              href: 'https://github.com/screeninvader/',
            },
            'screeninvader',
          ),
        ]),
        p(
          'surf the web, watch videos or browse images the way you usually do, then show it on any screen and/or projector.',
        ),
      ]),
      li([
        h3([Link({ href: 'http://github.com/magic/core' }, 'magic')]),
        p('magic static/serverless page generator.'),
      ]),
    ]),
  ]),
]
