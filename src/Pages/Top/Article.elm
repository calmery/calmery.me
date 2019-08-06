module Pages.Top.Article exposing (view)

import Html exposing (Html, a, article, div, h2, text)
import Html.Attributes exposing (class, href, id)
import Model exposing (Article, Model)
import Msg exposing (Msg)


blog : List Article
blog =
    [ { title = "メルカリのインターンシップに行ってきた"
      , date = "2018/10/06"
      , tags = [ "Internship" ]
      , url = "http://calmery.hatenablog.com/entry/2018/10/06/121419"
      }
    , { title = "Mint を試してみた"
      , date = "2018/08/05"
      , tags = [ "Mint" ]
      , url = "http://calmery.hatenablog.com/entry/2018/08/05/032432"
      }
    ]


view : Model -> Html Msg
view model =
    div
        [ id "articles" ]
        [ helper "Qiita" "https://qiita.com/calmery" model.qiita
        , helper "Blog" "http://calmery.hatenablog.com" blog
        ]


helper : String -> String -> List Article -> Html Msg
helper name url articles =
    article
        []
        ([ h2
            []
            [ text name ]
         ]
            ++ List.map
                (\article ->
                    a [ href article.url ]
                        [ div
                            [ class "article" ]
                            [ div [ class "title" ] [ text article.title ]
                            , div [ class "footer" ]
                                [ div [ class "tag" ]
                                    [ text
                                        (case List.head article.tags of
                                            Just tag ->
                                                tag

                                            Nothing ->
                                                ""
                                        )
                                    ]
                                , div [ class "date" ] [ text article.date ]
                                ]
                            ]
                        ]
                )
                (List.take 2 articles)
            ++ [ a [ href url ]
                    [ div
                        [ class "read-more" ]
                        [ text "Read More" ]
                    ]
               ]
        )
