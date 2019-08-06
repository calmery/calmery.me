module Pages.Top.Article exposing (view)

import Html exposing (Html, a, article, div, h2, text)
import Html.Attributes exposing (class, href, id)
import Msg exposing (Msg)


view : Html Msg
view =
    div
        [ id "articles" ]
        [ articleView "Blog" "http://calmery.hatenablog.com"
        , articleView "Qiita" "https://qiita.com/calmery"
        ]


articleView : String -> String -> Html Msg
articleView title url =
    article
        []
        [ h2
            []
            [ text title ]
        , a [ href "" ]
            [ div
                [ class "article" ]
                [ div [ class "title" ] [ text "メルカリのインターンシップに参加してきた" ]
                , div [ class "footer" ]
                    [ div [ class "tag" ] [ text "Internship" ]
                    , div [ class "date" ] [ text "2019/10/10" ]
                    ]
                ]
            ]
        , div
            [ class "article" ]
            [ text "Hello" ]
        , a [ href url ]
            [ div
                [ class "read-more" ]
                [ text "Read More" ]
            ]
        ]
