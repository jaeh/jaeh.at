export const View = (items, children = []) =>
  console.log(items, children) ||
  ul(
    { class: 'List' },
    (items && items.length ? items : children).map(i => [
      li([
        i && i.src && Img({ width: 60, height: 60, src: i.src }),
        div([h4(Link({ to: i.to }, i.title)), p(i.text)]),
      ]),
    ]),
  )

export const style = {
  width: '100%',

  h4: {
    margin: 0,
    padding: 0,
  },
}
