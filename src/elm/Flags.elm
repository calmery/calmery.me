module Flags exposing (decodeFlags)

import Json.Decode exposing (Decoder, Error, decodeString, field, map, string)
import Model exposing (Flags)


decodeFlags : String -> Result Error Flags
decodeFlags value =
    decodeString flagsDecoder value


flagsDecoder : Decoder Flags
flagsDecoder =
    map Flags
        (field "message" string)
