module Update exposing (update)

import Model exposing (Model)
import Msg exposing (Msg(..))
import Parts.Qiita exposing (decodeQiita)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        QiitaResponse (Ok response) ->
            let
                decodedQiita =
                    decodeQiita response
            in
            ( case decodedQiita of
                Ok qiita ->
                    { model | qiita = qiita }

                Err _ ->
                    model
            , Cmd.none
            )

        QiitaResponse (Err _) ->
            ( model, Cmd.none )
