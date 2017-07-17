module Elements.Profile exposing ( profile )

import Html exposing ( Html, div, text, br )
import Html.Attributes exposing ( .. )

type alias Profile =
  { name : String
  , location : String
  , description : List String
  }

calmery : Profile
calmery =
  Profile "Calmery" "Kumamoto, Japan" [ "Interested in WebAssembly and Functional Programming", "Prisma Illya / Yuruyuri" ]

profile : Html msg
profile = (\p ->
  div [ id "profile" ]
      [ div [ id "name" ]
            [ text p.name ]
      , div [ id "location" ]
            [ text p.location ]
      , div [ id "description" ]
            [ text "Interested in WebAssembly and Functional Programming"
            , br [] []
            , text "Prisma Illya / Yuruyuri"
            ]
      ] ) calmery
