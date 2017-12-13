import Elm from './elm/Main.elm'

import 'normalize.css'
import './static/css/style.css'

const app = Elm.Main.fullscreen()
app.ports.setTitle.subscribe( title => {
  document.title = title
} )
