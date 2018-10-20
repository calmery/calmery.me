module Data.Qiita exposing (getQiita)

import Http exposing (getString, send)
import Update exposing (Msg(..))


getQiita : Cmd Msg
getQiita =
    "https://qiita.com/api/v2/users/calmery/items?page=1&per_page=2"
        |> getString
        |> send GotQiita
