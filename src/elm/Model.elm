module Model exposing (..)


type alias Model =
    { qiita : List Article
    , blog : List Article
    }


type alias Article =
    { title : String
    , tags : List String
    , date : String
    , url : String
    }
