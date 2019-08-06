module Pages.Top exposing (view)

import Html exposing (Html, div, text)
import Html.Attributes exposing (id)
import Model exposing (Model)
import Pages.Top.Article as Article
import Pages.Top.Header as Header
import Pages.Top.Navigation as Navigation


view model =
    div []
        [ Header.view model
        , div
            [ id "body" ]
            [ Navigation.view
            , Article.view model
            ]
        ]
