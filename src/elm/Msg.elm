module Msg exposing (Msg(..))

import Http exposing (Error)


type Msg
    = QiitaResponse (Result Error String)
