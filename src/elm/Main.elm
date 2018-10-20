module Main exposing (..)

import Html exposing (program)
import Model exposing (Model)
import Update exposing (Msg(..), update)
import View exposing (view)
import Port exposing (setTitle)


init : ( Model, Cmd Msg )
init =
    ( "", setTitle "Calmery.me" )


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }
