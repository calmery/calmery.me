module Main exposing (init, main, subscriptions)

import Browser exposing (element)
import Model exposing (Model)
import Data.Qiita exposing (getQiita)
import Data.Blog exposing (getBlog)
import Ports exposing (setTitle, parsedBlog, parsedQiita)
import Update exposing (Msg(..), update)
import View exposing (view)


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model [] [], Cmd.batch [ setTitle "Calmery.me", getQiita, getBlog ] )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch [ parsedBlog ParsedBlog, parsedQiita ParsedQiita ]


main : Program () Model Msg
main =
    element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
