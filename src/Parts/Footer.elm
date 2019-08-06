module Parts.Footer exposing (view)

import Html exposing (Html, div, footer, p, text)
import Html.Attributes exposing (id)
import Model exposing (Model)
import Msg exposing (Msg)


view : Model -> Html Msg
view model =
    footer
        []
        [ copyright
        ]


copyright : Html Msg
copyright =
    p
        [ id "copyright" ]
        [ text "CopyRight 2017-present Calmery All Rights Reserved" ]
