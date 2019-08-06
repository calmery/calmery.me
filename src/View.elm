module View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, div, node)
import Html.Attributes exposing (id)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Parts.Footer as Footer
import Route exposing (Route(..))


view : Model -> Document Msg
view model =
    { title = "Calmery.moe"
    , body =
        [ node "main"
            []
            [ div
                [ id "container" ]
                [ Footer.view model
                ]
            ]
        ]
    }
