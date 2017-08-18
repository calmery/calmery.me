module Elements.Icon exposing ( Model, icons, init, Msg(..), icon )

import Html exposing ( Html, div )
import Html.Attributes exposing ( .. )
import Html.Events exposing ( .. )

import Array exposing ( .. )

type alias Icon =
  { src : String
  , line_src : String
  }

type alias Model = Maybe Icon

type Msg =
  ChangeIcon Int

init = get ( length ( fromList icons ) - 1 ) ( fromList icons )

icons : List Icon
icons = [ Icon "icon1.png" "icon_line1.jpg"
        , Icon "icon2.png" "icon_line2.jpg"
        , Icon "icon3.png" "icon_line3.jpg"
        ]

menu list =
  List.map (\l -> div [ class "btn", onClick ( ChangeIcon l )
                 , style [ ( "background", "url( resources/img/icons/icon" ++ ( toString ( l + 1 ) ) ++ ".png ) 0% 0% / cover" ) ]
                 ]
                 []
      ) list

createIconView model =
  case model of
    Just m ->
      m.src
    Nothing ->
      "icon3.png"

icon model =
  div [ id "icon" ]
      [ div [ id "src", attribute "ontouchstart" "", style [ ( "background", "url( resources/img/icons/" ++ ( createIconView model ) ++ " ) 0% 0% / cover" ) ] ]
            []
      , div [ id "select" ]
            ( menu [0,1,2] )
      ]
