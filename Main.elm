port module Main exposing ( .. )

import Html exposing ( div, text, a, img, program, Html, p, br )
import Html.Attributes exposing ( .. )

import Elements.Icon exposing( icon )
import Elements.Profile exposing( profile )
import Elements.Links exposing( linkList )

-- Model

port title : String -> Cmd a

type alias Model =
  {}

init : ( Model, Cmd Msg )
init = ( {}, title "Calmery.me" )

-- Message

type Msg =
  NoOp

-- View

view : Model -> Html Msg
view model =
  div [ id "field" ]
      [ icon
      , profile
      , linkList
      ]

-- Update

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  ( {}, Cmd.none )

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
