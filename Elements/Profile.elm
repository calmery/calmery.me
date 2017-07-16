module Elements.Profile exposing ( profile )

import Html exposing ( Html, div, text, br )
import Html.Attributes exposing ( .. )

profile : Html msg
profile =
  div [ id "profile" ]
      [ div [ id "name" ]
            [ text "Calmery" ]
      , div [ id "location" ]
            [ text "Kumamoto, Japan" ]
      , div [ id "description" ]
            [ text "Interested in WebAssembly and Functional Programming"
            , br [] []
            , text "Prisma Illya / Yuruyuri"
            ]
      ]
