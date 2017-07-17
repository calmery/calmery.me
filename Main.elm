port module Main exposing ( .. )

import Html exposing ( div, text, a, img, program, Html, p, br, button )
import Html.Attributes exposing ( .. )
import Html.Events exposing ( onClick )

import Elements.Icon exposing( icon, Icon )
import Elements.Profile exposing( profile )
import Elements.Links exposing( linkList )

-- Model

port title : String -> Cmd a

type alias Model = Icon

init : ( Model, Cmd Msg )
init = ( Icon "icon3.png" "icon_line3.jpg", title "Calmery.me" )

-- Message

type Msg =
  ChangeIcon Int

-- View

view : Model -> Html Msg
view model =
  div [ id "field" ]
      [ div [ id "icon" ]
          [ div [ id "src", attribute "ontouchstart" "", style [ ( "background", "url( resources/img/icon/" ++ model.src ++ ") 0% 0% / cover" )
                                                               ]
                ]
                []
          ]
      , profile
      , linkList
      , button [ onClick ( ChangeIcon 2 ) ]
               [ text "Change" ]
      ]

-- Update

update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
  case msg of
    ChangeIcon index ->
      ( Icon "icon2.jpg" "icon_line2.jpg", Cmd.none )

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
