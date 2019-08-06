module Model exposing (Model, initialModel)

import Browser.Navigation exposing (Key)
import Data.EnvironmentVariables exposing (EnvironmentVariables)
import Data.Qiita.Model exposing (Qiita)
import Route exposing (Route)


initialModel : EnvironmentVariables -> Key -> Maybe Route -> Model
initialModel environmentVariables key route =
    { environmentVariables = environmentVariables
    , key = key
    , route = route
    , qiita = []
    }


type alias Model =
    { environmentVariables : EnvironmentVariables
    , key : Key
    , route : Maybe Route
    , qiita : List Qiita
    }
