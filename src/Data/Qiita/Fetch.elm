module Data.Qiita.Fetch exposing (fetchQiita)

import Http
import Msg exposing (Msg(..))


fetchQiita : Cmd Msg
fetchQiita =
    Http.get
        { url =
            "https://qiita.com/api/v2/users/calmery/items?page=1&per_page=2"
        , expect = Http.expectString UpdateQiita
        }
