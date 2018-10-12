module Parts.Header exposing (header)

import Html exposing (Html, div, img, text)
import Html.Attributes exposing (alt, class, src, style)
import Msg exposing (Msg)
import Parts.Utility exposing (flex)
import Profile


name : Html Msg
name =
    div [ class "name" ]
        [ text Profile.name ]


description : Html Msg
description =
    div [ class "description" ]
        [ text Profile.description ]


icon : Html Msg
icon =
    div [ class "icon", style "background" ("url('" ++ Profile.icon ++ "')"), style "background-size" "cover" ]
        []


line : Html Msg
line =
    div [ class "line" ]
        []


location : Html Msg
location =
    div [ class "location" ]
        [ flex
            [ img [ src "assets/location.svg", alt "Location" ] []
            , text Profile.location
            ]
        ]


header : Html Msg
header =
    div [ class "header" ]
        [ name
        , description
        , icon
        , location
        , line
        ]
