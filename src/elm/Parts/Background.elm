module Parts.Background exposing (background)

import Html exposing (Html, div)
import Html.Attributes exposing (class)
import Msg exposing (Msg)


background : Html Msg
background =
    div [ class "background" ]
        []
