module Update exposing (Msg(..), update)

import Model exposing (Model)
import Decoder exposing (decodeArticles)
import Http exposing (Error)
import Ports exposing (parseBlog, parseQiita)


type Msg
    = GotQiita (Result Error String)
    | GotBlog (Result Error String)
    | ParsedBlog String
    | ParsedQiita String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotQiita (Ok response) ->
            ( model, parseQiita response )

        GotQiita (Err _) ->
            ( model, Cmd.none )

        GotBlog (Ok response) ->
            ( model, parseBlog response )

        GotBlog (Err _) ->
            ( model, Cmd.none )

        ParsedQiita response ->
            let
                decodedArticles =
                    decodeArticles response
            in
                ( case decodedArticles of
                    Ok qiita ->
                        { model | qiita = qiita }

                    Err _ ->
                        model
                , Cmd.none
                )

        ParsedBlog response ->
            let
                decodedArticles =
                    decodeArticles response
            in
                ( case decodedArticles of
                    Ok blog ->
                        { model | blog = blog }

                    Err _ ->
                        model
                , Cmd.none
                )
