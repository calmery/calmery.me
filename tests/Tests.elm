module Tests exposing (..)

import Test exposing (Test, test, describe)
import Expect exposing (equal)
import Tuple exposing (first)
import Update exposing (Msg(..), update)


all : Test
all =
    describe "Elm Tests"
        [ test "Dummy" <|
            \_ ->
                Expect.equal True True
        ]
