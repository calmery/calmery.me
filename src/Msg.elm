module Msg exposing (Msg(..))

import Browser exposing (UrlRequest(..))
import Http exposing (Error)
import Url exposing (Url)


type Msg
    = OnUrlRequest UrlRequest
    | OnUrlChange Url
    | UpdateQiita (Result Error String)
