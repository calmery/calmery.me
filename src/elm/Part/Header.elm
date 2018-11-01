module Part.Header exposing (viewHeader)

import Html exposing (Html, div, img, text)
import Html.Attributes exposing (alt, class, src, style)
import Update exposing (Msg)
import Part.Helper exposing (flex)


viewHeader : Html Msg
viewHeader =
    div [ class "header" ]
        [ div [ class "name" ]
            [ text "Calmery - Marei Kikukawa" ]
        , div [ class "description" ]
            [ text "Software Engineer (Frontend)" ]
        , div [ class "icon", style "background" ("url('assets/profile.jpg')"), style "background-size" "cover" ]
            []
        , div [ class "location" ]
            [ flex
                [ img [ src "assets/location.svg", alt "Location" ] []
                , text "Fukuoka, Japan"
                ]
            ]
        , div [ class "line" ]
            []
        ]
