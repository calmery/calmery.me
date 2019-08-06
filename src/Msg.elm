module Msg exposing (Msg(..))

import Browser exposing (UrlRequest(..))
import Url exposing (Url)


type Msg
    = OnUrlRequest UrlRequest
    | OnUrlChange Url
