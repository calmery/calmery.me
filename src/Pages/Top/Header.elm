module Pages.Top.Header exposing (view)

import Html exposing (Html, a, div, h1, header, img, node, p, span, text)
import Html.Attributes exposing (alt, class, href, id, src)
import Model exposing (Model)
import Msg exposing (Msg)


view : Model -> Html Msg
view model =
    header
        []
        [ div [ class "absolute" ]
            [ logo
            , border
            , introduction "-" "Graduate Student / Frontend Engineer (part-time)"
            , introduction "x" "Fukuoka, Japan"
            , introduction "F" "contact@calmery.me"
            ]
        , profileIcon
        ]


logo : Html Msg
logo =
    h1
        []
        [ text "Calmery / Marei Kikukawa"
        ]


border : Html Msg
border =
    div
        [ id "border" ]
        [ div [] []
        , div [] []
        ]


introduction : String -> String -> Html Msg
introduction icon message =
    p
        []
        [ span [] [ text icon ]
        , text message
        ]


profileIcon : Html Msg
profileIcon =
    div
        [ id "profile-icon" ]
        []
