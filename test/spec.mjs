import { is } from '@magic/test'

import * as app from '../src/app.mjs'
import * as page from '../src/pages/index.mjs'

export default [
  { fn: app, expect: is.object },
  { fn: app.state, expect: is.object },
  { fn: () => page.View, expect: is.fn },
]
