module Pages.Top.Article exposing (view)

import Html exposing (Html, a, article, div, h2, text)
import Html.Attributes exposing (class, href, id)
import Model exposing (Model)
import Msg exposing (Msg)
import Pages.Top.Article.Blog as Blog
import Pages.Top.Article.Qiita as Qiita


view : Model -> Html Msg
view model =
    div
        [ id "articles" ]
        [ Qiita.view model
        , Blog.view
        ]
