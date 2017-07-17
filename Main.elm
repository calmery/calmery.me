port module Main exposing ( .. )

import Html exposing ( div, text, a, img, program, Html, p, br, button )
import Html.Attributes exposing ( .. )
import Html.Events exposing ( onClick )

import Elements.Icon exposing( icon, icons, Icon )
import Elements.Profile exposing( profile )
import Elements.Links exposing( linkList )

import Array exposing ( .. )

-- Model

port title : String -> Cmd a

type alias Model = Maybe Icon

init = ( get ( length ( fromList icons ) - 1 ) ( fromList icons ), title "Calmery.me" )

-- Message

type Msg =
  ChangeIcon Int

-- View

getIcon index = get ( length index - 1 ) ( fromList icons )

view : Model -> Html Msg
view model =
  case model of
    Just m ->
      div [ id "field" ]
          [ div [ id "icon" ]
              [ div [ id "src", attribute "ontouchstart" "", style [ ( "background", "url( resources/img/icon/" ++ m.src ++ ") 0% 0% / cover" )
                                                                   ]
                    ]
                    []
              , div [ id "select" ]
                    [ div [ class "btn", onClick ( ChangeIcon 0 ), style [ ( "background", "url( resources/img/icon/icon1.png ) 0% 0% / cover" )
                                                                         ] ]
                          []
                    , div [ class "btn", onClick ( ChangeIcon 1 ), style [ ( "background", "url( resources/img/icon/icon2.jpg ) 0% 0% / cover" )
                                                                         ] ]
                          []
                    , div [ class "btn", onClick ( ChangeIcon 2 ), style [ ( "background", "url( resources/img/icon/icon3.png ) 0% 0% / cover" )
                                                                         ] ]
                          []
                    ]
              ]
          , profile
          , linkList
          ]
    Nothing ->
      div [ id "field" ]
          [ div [ id "icon" ]
              [ div [ id "src", attribute "ontouchstart" "", style [ ( "background", "url( resources/img/icon/icon3.png) 0% 0% / cover" )
                                                                   ]
                    ]
                    []
              ]
          , profile
          , linkList
          , button [ onClick ( ChangeIcon 1 ) ]
                   [ text "Change" ]
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
