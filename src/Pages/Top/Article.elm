module Pages.Top.Article exposing (view)

import Html exposing (Html, a, article, div, h2, text)
import Html.Attributes exposing (class, href, id)
import Model exposing (Model)
import Msg exposing (Msg)
import Pages.Top.Article.Qiita as Qiita


view : Model -> Html Msg
view model =
    div
        [ id "articles" ]
        [ Qiita.view model
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
