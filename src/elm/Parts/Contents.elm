module Parts.Contents exposing (contents)

import Html exposing (Html, a, div, img, text)
import Html.Attributes exposing (alt, class, href, src)
import Model exposing (Content)
import Msg exposing (Msg)
import Parts.Utility exposing (flexSpaceBetween, group)


content : String -> String -> String -> Html Msg
content title date tag =
    div [ class "content" ]
        [ div [ class "title" ]
            [ text title ]
        , flexSpaceBetween
            [ div [ class "tag" ] [ text "Internship" ]
            , div [ class "date" ] [ text "2018/10/06" ]
            ]
        ]


contents : String -> String -> List Content -> Html Msg
contents name url articles =
    div [ class "contents" ]
        [ flexSpaceBetween
            [ text name
            , a [ href url ]
                [ img [ src "assets/more.svg", alt "More" ] []
                ]
            ]
        , group
            (List.map
                (\article ->
                    a [ href article.url ]
                        [ content article.title article.date article.tag
                        ]
                )
                articles
            )
        ]
