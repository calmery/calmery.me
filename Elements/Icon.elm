module Elements.Icon exposing ( Icon, icons )

import Html exposing ( Html, div )
import Html.Attributes exposing ( .. )

import Array exposing ( fromList, get )

type alias Icon =
  { src : String
  , line_src : String
  }

icons : List Icon
icons = [ Icon "icon1.png" "icon_line1.jpg"
        , Icon "icon2.jpg" "icon_line2.jpg"
        , Icon "icon3.png" "icon_line3.jpg"
        ]
