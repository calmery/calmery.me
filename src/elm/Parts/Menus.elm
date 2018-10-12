module Parts.Menus exposing (menus)

import Html exposing (Html, a, div, img, text)
import Html.Attributes exposing (alt, class, href, src)
import Model exposing (Menu)
import Msg exposing (Msg)
import Parts.Utility exposing (flexSpaceBetween)


menu : String -> String -> Html Msg
menu name url =
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


menus : List Menu -> Html Msg
menus links =
    div [ class "menus" ]
        (List.map
            (\link ->
                menu link.name link.url
            )
            links
        )
