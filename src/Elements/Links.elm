module Elements.Links exposing (linkList)

import Html exposing (Html, div, a, img)
import Html.Attributes exposing (..)


type alias Link =
    { alt : String
    , href : String
    , img : String
    }


links : List Link
links =
    [ Link "Twitter" "http://twitter.com/calmeryme" "resources/img/twitter.png"
    , Link "Mastodon(Pawoo)" "http://pawoo.net/@calmery" "resources/img/mastodon.png"
    , Link "GitHub" "http://github.com/calmery" "resources/img/github.png"
    , Link "Blog" "http://blog.calmery.me" "resources/img/blog.png"
    ]


create : List Link -> Html msg
create links =
    div [ id "link" ]
        (links
            |> List.map
                (\s ->
                    div [ class "wrapper" ]
                        [ a [ href s.href ]
                            [ div [ attribute "ontouchstart" "" ]
                                [ img [ src s.img, alt s.alt ]
                                    []
                                ]
                            ]
                        ]
                )
        )


linkList : Html msg
linkList =
    create links
