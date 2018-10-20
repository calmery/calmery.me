module Data.Blog exposing (getBlog)

import Http exposing (getString, send)
import Update exposing (Msg(..))


getBlog : Cmd Msg
getBlog =
    "http://calmery.hatenablog.com/feed"
        |> getString
        |> send GotBlog
