module Data.Qiita.Model exposing (Qiita)


type alias Qiita =
    { title : String
    , tags : List String
    , date : String
    , url : String
    }
