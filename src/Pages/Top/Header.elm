module Pages.Top.Header exposing (view)

import Html exposing (Html, a, div, h1, header, node, p, span, text)
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
            , introduction "-" <| text "Software Engineer, Frontend"
            , introduction "K" <|
                span [ class "description" ]
                    [ text "I work for pixiv Inc. See my "
                    , a [ class "resume", href "https://github.com/calmery/Resume" ] [ text "resume" ]
                    , text "."
                    ]
            , introduction "x" <| text "Tokyo, Japan"
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


introduction : String -> Html Msg -> Html Msg
introduction icon message =
    p
        []
        [ span [] [ text icon ]
        , message
        ]


profileIcon : Html Msg
profileIcon =
    div
        [ id "profile-icon" ]
        []
