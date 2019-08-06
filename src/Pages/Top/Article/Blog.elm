module Pages.Top.Article.Blog exposing (view)

import Html exposing (Html, a, article, div, h2, text)
import Html.Attributes exposing (class, href)
import Model exposing (Model)
import Msg exposing (Msg)


blogs :
    List
        { title : String
        , date : String
        , tags : List String
        , url : String
        }
blogs =
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


view : Html Msg
view =
    article
        []
        ([ h2
            []
            [ text "Blog" ]
         ]
            ++ List.map
                (\blog ->
                    a [ href blog.url ]
                        [ div
                            [ class "article" ]
                            [ div [ class "title" ] [ text blog.title ]
                            , div [ class "footer" ]
                                [ div [ class "tag" ]
                                    [ text
                                        (case List.head blog.tags of
                                            Just tag ->
                                                tag

                                            Nothing ->
                                                ""
                                        )
                                    ]
                                , div [ class "date" ] [ text blog.date ]
                                ]
                            ]
                        ]
                )
                blogs
            ++ [ a [ href "http://calmery.hatenablog.com/" ]
                    [ div
                        [ class "read-more" ]
                        [ text "Read More" ]
                    ]
               ]
        )
