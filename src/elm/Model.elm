module Model exposing (Content, Flags, Menu, Model)

import Parts.Qiita exposing (Qiita)


type alias Model =
    { qiita : List Qiita }


type alias Flags =
    { message : String }


type alias Content =
    { title : String
    , tag : String
    , date : String
    , url : String
    }


type alias Menu =
    { name : String
    , url : String
    }
