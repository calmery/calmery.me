module Update exposing (update)

import Browser exposing (UrlRequest(..))
import Browser.Navigation exposing (load, pushUrl)
import Data.Qiita.Decoder exposing (decodeQiita)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Route exposing (parseUrl)
import Url exposing (Url)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        OnUrlRequest urlRequest ->
            case urlRequest of
                Internal url ->
                    ( model
                    , Cmd.batch
                        [ pushUrl model.key (Url.toString url)
                        ]
                    )

                External href ->
                    ( model, load href )

        OnUrlChange url ->
            let
                route =
                    parseUrl url
            in
            ( { model | route = route }, Cmd.none )

        UpdateQiita (Ok response) ->
            ( case decodeQiita response of
                Ok articles ->
                    { model | qiita = articles }

                Err e ->
                    Debug.log ("Error" ++ Debug.toString e ++ response) model
            , Cmd.none
            )

        UpdateQiita (Err _) ->
            ( model, Cmd.none )
