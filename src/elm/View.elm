module View exposing (view)

import Html exposing (Html, div, text)
import Html.Attributes exposing (class)
import Model exposing (Model)
import Msg exposing (Msg)
import Parts.Background exposing (background)
import Parts.Contents exposing (contents)
import Parts.Header exposing (header)
import Parts.Menus exposing (menus)
import Parts.Utility exposing (flex)
import Profile


container : List (Html Msg) -> Html Msg
container children =
    div [ class "container" ]
        [ div [ class "padding" ]
            children
        ]


copyright : Html Msg
copyright =
    div [ class "copyright" ]
        [ text "CopyRight 2017-2018 Calmery All Rights Reserved" ]



-- View


view : Model -> Html Msg
view model =
    div []
        [ background
        , container
            [ header
            , menus Profile.menus
            , div [ class "articles" ]
                [ flex [ contents "Blog" "http://calmery.hatenablog.com" Profile.blog, contents "Qiita" "https://qiita.com/calmery" Profile.qiita ] ]
            , copyright
            ]
        ]
