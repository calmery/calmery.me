module Part.Article exposing (viewArticles)

import Html exposing (Html, a, div, img, text)
import Html.Attributes exposing (alt, class, href, src)
import Model exposing (Article)
import Update exposing (Msg)
import Part.Helper exposing (flexSpaceBetween, group)


viewArticle : String -> String -> String -> Html Msg
viewArticle title date tag =
    div [ class "article" ]
        [ div [ class "title" ]
            [ text title ]
        , flexSpaceBetween
            [ div [ class "tag" ] [ text tag ]
            , div [ class "date" ] [ text date ]
            ]
        ]


viewArticles : String -> String -> List Article -> Html Msg
viewArticles name url articles =
    let
        getTag tags =
            case List.head tags of
                Just tag ->
                    tag

                Nothing ->
                    ""
    in
        div [ class "articles" ]
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
                            [ viewArticle article.title
                                article.date
                                (getTag article.tags)
                            ]
                    )
                    articles
                )
            ]
