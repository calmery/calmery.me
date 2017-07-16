module Elements.Icon exposing ( icon )

import Html exposing ( Html, div )
import Html.Attributes exposing ( .. )

icon : Html msg
icon =
  div [ id "icon" ]
      [ div [ id "src", attribute "ontouchstart" "" ]
            []
      ]
