port module Ports exposing (..)


port setTitle : String -> Cmd msg


port parseBlog : String -> Cmd msg


port parsedBlog : (String -> msg) -> Sub msg


port parseQiita : String -> Cmd msg


port parsedQiita : (String -> msg) -> Sub msg
