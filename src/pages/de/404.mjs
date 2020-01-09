export const View = state => [
  h3(state.title),
  p(state.description),
  p([Link({ to: '/' }, 'Klicke hier'), ' um bekanntes Gebiet zu erreichen.']),
]

export const state = {
  lang: 'de',
  job: 'technomant',
  occupation: [
    'ich jongliere mit code seit sechszehn,',
    'mit keulen, bällen und ringen seit sechsundzwanzig',
    'und das leben mit mir seit etwa sechsunddreissig jahren.',
    'ich geniesse das alles.',
  ],
  title: '404 - nicht gefunden',
  description: 'Hier ist leider nur Leere.',
}
