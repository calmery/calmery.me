module Elements.Profile exposing (profile)

import Html exposing (Html, div, text, br)
import Html.Attributes exposing (..)


type alias Profile =
    { name : String
    , location : String
    , description : String
    }


calmery : Profile
calmery =
    Profile "Calmery" "Kumamoto, Japan" "Interested in WebAssembly and Functional Programming\nPrisma Illya / Yuruyuri"


profile : Html msg
profile =
    (\p ->
        div [ id "profile" ]
            [ div [ id "name" ]
                [ text p.name ]
            , div [ id "location" ]
                [ text p.location ]
            , div [ id "description" ]
                (List.intersperse (br [] []) (List.map (\s -> text s) (String.split "\n" p.description)))
            ]
    )
        calmery
