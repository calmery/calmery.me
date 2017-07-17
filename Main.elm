port module Main exposing ( .. )

import Html exposing ( Html, div, text, a, img, program, p, br, button )
import Html.Attributes exposing ( .. )
import Html.Events exposing ( onClick )

import Elements.Icon exposing( icons, Msg(..), icon )
import Elements.Profile exposing( profile )
import Elements.Links exposing( linkList )

import Array exposing ( .. )

-- Model

port title : String -> Cmd a

type alias Model = Elements.Icon.Model

init = ( Elements.Icon.init, title "Calmery.me" )

-- Message

type alias Msg = Elements.Icon.Msg

-- View

view : Model -> Html Elements.Icon.Msg
view model =
      div [ id "field" ]
          [ icon model
          , profile
          , linkList
          ]

-- Update

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    ChangeIcon index ->
      ( get index ( fromList icons ), Cmd.none )

-- Subscriptions

subscriptions : Model -> Sub Msg
subscriptions model =
  Sub.none

-- Main

main : Program Never Model Msg
main =
  program
    { init = init
    , view = view
    , update = update
    , subscriptions = subscriptions
    }
