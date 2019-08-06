module Pages.Top.Articles exposing (view)

import Html exposing (Html, a, div, p, section, text)
import Html.Attributes exposing (class, href, id, style)
import Model exposing (Model)
import Msg exposing (Msg)
import Pages.Loading as LoadingPage
import Pages.NotFound as NotFoundPage


view : Model -> Html Msg
view model =
    section
        [ id "articles" ]
        (case model.route of
            Just url ->
                [ text "Top" ]

            Nothing ->
                [ NotFoundPage.view False ]
        )
