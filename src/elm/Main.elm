module Main exposing (init, main, subscriptions)

import Browser exposing (element)
import Flags exposing (decodeFlags)
import Model exposing (Model)
import Msg exposing (Msg)
import Parts.Qiita exposing (getQiita)
import Ports exposing (setTitle)
import Update exposing (update)
import View exposing (view)


init : String -> ( Model, Cmd Msg )
init value =
    let
        decoded =
            decodeFlags value

        message =
            case decoded of
                Ok flags ->
                    flags.message

                Err _ ->
                    ""
    in
    ( Model [], Cmd.batch [ setTitle "Calmery.me" ] )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


main : Program String Model Msg
main =
    element
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
