module Parts.Qiita exposing (Qiita, decodeQiita, getQiita, qiitaDecoder)

import Http
import Json.Decode exposing (Decoder, Error, decodeString, field, list, map3, string)
import Msg exposing (Msg(..))


getQiita : Cmd Msg
getQiita =
    "https://qiita.com/api/v2/users/calmery/items?page=1&per_page=2"
        |> Http.getString
        |> Http.send QiitaResponse



--- Decoder


decodeQiita : String -> Result Error (List Qiita)
decodeQiita response =
    decodeString (list qiitaDecoder) response


type alias Qiita =
    { title : String
    , url : String
    , created_at : String
    }


qiitaDecoder : Decoder Qiita
qiitaDecoder =
    map3 Qiita
        (field "title" string)
        (field "url" string)
        (field "created_at" string)
