import Elm from './elm/Main.elm'

import 'normalize.css'

const app = Elm.Main.fullscreen()
app.ports.title.subscribe( title => {
  document.title = title
} )
