export const state = {
  lang: 'de',
  job: 'technomant',
  occupation: [
    'ich jongliere seit achtzehn mit code,',
    'seit achtundzwanzig mit keulen, bällen und ringen',
    'und seit etwa achtunddreissig jahren jongliert das leben mit mir.',
    'ich geniesse das alles.',
  ],
  title: '404 - nicht gefunden',
  description: 'hier ist leider nur Leere.',
}

export const View = state => [
  h3(state.title),

  p(state.description),

  p(Link({ text: 'klicke hier', to: '/' })),
]
