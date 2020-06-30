export const state = {
  lang: 'de',
  job: 'technomant',
  description: [
    'ich jongliere mit code seit zwanzig,',
    'mit keulen, bällen und ringen seit dreissig',
    'und das leben mit mir seit etwa vierzig jahren.',
    'ich geniesse das alles.',
  ],
  title: '404 - nicht gefunden',
}

export const View = state => [
  h3(state.title),

  p(state.description),

  p(Link({ text: 'klicke hier', to: '/' })),
]
