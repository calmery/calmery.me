module Tests exposing (..)

import Test exposing (..)
import TestExp exposing (..)
import Html exposing (div, text)


--  target modules


all : Test
all =
    describe "List module Test"
        [ "Test"
            => (List.range 1 10 |> List.map (\x -> div [] [ text <| toString x ]) |> List.head)
            === Just (div [] [ text "1" ])
        ]
