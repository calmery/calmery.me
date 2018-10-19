module View exposing (view)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Model exposing (Model)
import Update exposing (Msg)
import Part.Article exposing (viewArticles)
import Part.Header exposing (viewHeader)
import Part.Menu exposing (viewMenus)
import Part.Helper exposing (flex)


container : List (Html Msg) -> Html Msg
container children =
    div [ class "container" ]
        [ div [ class "padding" ]
            children
        ]



-- View


view : Model -> Html Msg
view model =
    div []
        [ div [ class "background" ]
            []
        , container
            [ viewHeader
            , viewMenus
            , div [ class "contents" ]
                [ flex
                    [ viewArticles "Blog" "http://calmery.hatenablog.com" model.blog
                    , viewArticles "Qiita" "https://qiita.com/calmery" model.qiita
                    ]
                ]
            , div [ class "copyright" ]
                [ text "CopyRight 2017-2018 Calmery All Rights Reserved" ]
            ]
        ]
