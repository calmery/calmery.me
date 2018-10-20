module Part.Menu exposing (viewMenus)

import Html exposing (Html, a, div, img, text)
import Html.Attributes exposing (alt, class, href, src)
import Update exposing (Msg)
import Part.Helper exposing (flexSpaceBetween)


viewMenus : Html Msg
viewMenus =
    let
        viewMenu : String -> String -> Html Msg
        viewMenu name url =
            div [ class "wrap" ]
                [ a [ href url ]
                    [ div [ class "menu" ]
                        [ flexSpaceBetween
                            [ img [ src <| "assets/" ++ String.toLower name ++ ".svg", alt "Icon" ] []
                            , text name
                            ]
                        ]
                    ]
                ]
    in
        div [ class "menus" ]
            (List.map
                (\( name, url ) ->
                    viewMenu name url
                )
                [ ( "Portfolio", "https://portfolio.calmery.me" )
                , ( "Blog", "http://calmery.hatenablog.com" )
                , ( "GitHub", "https://github.com/calmery" )
                , ( "Twitter", "https://twitter.com/calmeryme" )
                , ( "Facebook", "https://www.facebook.com/marei.kikukawa" )
                , ( "Qiita", "https://qiita.com/calmery" )
                ]
            )
