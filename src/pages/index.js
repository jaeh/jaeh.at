module.exports = {
  View: (state, actions) => [
    Header.View,
    div({ class: 'section communications' }, [
      h2('communications'),
      ul([
        li([
          span('email: '),
          a({ href: 'mailto:jascha@jaeh.at' }, ['jascha', span({ class: 'at' }, '@'), 'jaeh.at']),
        ]),
        li([
          span('github: '),
          a(
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
          a(
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
          a(
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
            a(
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
            a(
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
            a(
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
            a(
              {
                href: 'https://bitcoinfoundation.org',
                rel: 'nofollow noindex noopener',
                target: '_blank',
              },
              'bitcoinfoundation',
            ),
            ' webproperties from 2012-2014.',
          ]),
          p('got fired when the statists took over.'),
        ]),
      ]),
    ]),

    div({ class: 'section occupations' }, [
      h2('occupations'),
      ul([
        li([
          h3([
            a(
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
            a(
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
            a(
              {
                href: 'http://github.com/magic/core',
                rel: 'nofollow noindex noopener',
                target: 'magic',
              },
              'magic',
            ),
          ]),
          p('magic static/serverless page generator.'),
          h4('static files:'),
          p([
            'publishes to ',
            Link({ to: 'https://github.com' }, 'github'),
            ', ',
            Link({ to: 'https://gitlab.com' }, 'gitlab'),
            ' and any other git enabled hosting service.'
          ]),
          p('SOON: publish static files to now.sh'),

          h4('serverless / faas'),
          p([
            'SOON: automagically generates ',
            Link({ to: 'https://now.sh' }, 'now.sh'),
            ' lambdas, derived from the ',
            Link({ to: 'https://github.com/magic-modules/' }, '@magic-modules'),
            ' you use in your pages.',
            ' this will make visitor statistics, user authentication and authorization, chat, and all other server side goodies possible.',
          ]),
          p('did i mention that all of this is FREE (as in beer) for the static file hosting? yes, it really is.'),
          p('additionally, now.sh offers 1000 free daily interactions with the serverless functions.'),
        ]),

        li([a('???')]),
      ]),
    ]),

    div({ class: 'section unlicense' }, [
      h2('licenses'),
      div([
        span('If there is no license attached to code i wrote, then i consider it to be '),
        Link({ to: '/unlicense/' }, 'free and unlicensed'),
      ]),
    ]),
  ],
}
