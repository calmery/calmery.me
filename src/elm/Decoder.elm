module Decoder exposing (decodeArticles)

import Json.Decode exposing (Decoder, Error, decodeString, field, list, map4, string)
import Model exposing (Article)


decodeArticles : String -> Result Error (List Article)
decodeArticles response =
    decodeString (list articleDecoder) response


articleDecoder : Decoder Article
articleDecoder =
    map4 Article
        (field "title" string)
        (field "tags" (list string))
        (field "created_at" string)
        (field "url" string)
