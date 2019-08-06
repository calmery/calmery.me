module Pages.Top.Navigation exposing (view)

import Html exposing (Html, a, div, img, nav, span, text)
import Html.Attributes exposing (alt, class, href, src)
import Msg exposing (Msg)


view : Html Msg
view =
    nav
        []
        [ link "Twitter" "https://twitter.com/calmeryme"
        , link "GitHub" "https://github.com/calmery"
        , link "Qiita" "https://qiita.com/calmery"
        , link "Blog" "http://calmery.hatenablog.com"
        , link "Calmery.moe" "https://calmery.moe"
        ]


link : String -> String -> Html Msg
link name url =
    a [ href url ]
        [ div
            [ class "link" ]
            [ div [] [ img [ src ("assets/" ++ name ++ ".svg"), alt name ] [] ]
            , div [] [ text name ]
            ]
        ]
