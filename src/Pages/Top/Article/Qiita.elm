module Pages.Top.Article.Qiita exposing (view)

import Html exposing (Html, a, article, div, h2, text)
import Html.Attributes exposing (class, href)
import Model exposing (Model)
import Msg exposing (Msg)


view : Model -> Html Msg
view model =
    article
        []
        ([ h2
            []
            [ text "Qiita" ]
         ]
            ++ List.map
                (\qiita ->
                    a [ href qiita.url ]
                        [ div
                            [ class "article" ]
                            [ div [ class "title" ] [ text qiita.title ]
                            , div [ class "footer" ]
                                [ div [ class "tag" ]
                                    [ text
                                        (case List.head qiita.tags of
                                            Just tag ->
                                                tag

                                            Nothing ->
                                                ""
                                        )
                                    ]
                                , div [ class "date" ] [ text qiita.date ]
                                ]
                            ]
                        ]
                )
                (List.take 2 model.qiita)
            ++ [ a [ href "https://qiita.com/calmery" ]
                    [ div
                        [ class "read-more" ]
                        [ text "Read More" ]
                    ]
               ]
        )
