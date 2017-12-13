port module Main exposing (..)

import Html exposing (Html, program, div, a, img, text)
import Html.Attributes exposing (id, class, src, href, style)
import List


port setTitle : String -> Cmd msg


type alias Profile =
    { name : String
    , icon : String
    , location : String
    , bio : String
    }


type alias Menu =
    { name : String
    , icon : String
    , href : String
    }


type alias Repository =
    { owner : String
    , name : String
    , description : String
    , href : String
    }


type alias Tag =
    { name : String
    , href : String
    }


type alias Article =
    { name : String
    , created_at : String
    , tags : List Tag
    , href : String
    }


menus : List Menu
menus =
    [ Menu "Twitter" "static/img/twitter.png" "https://twitter.com/calmeryme"
    , Menu "Facebook" "static/img/facebook.png" "https://fb.me/marei.kikukawa"
    , Menu "GitHub" "static/img/github.png" "https://github.com/calmery"
    , Menu "Hatenablog" "static/img/hatenablog.png" "http://calmery.hatenablog.com"
    ]


spMenu : Menu
spMenu =
    Menu "Mail" "static/img/mail.png" "mailto:contact@calmery.me"


profile : Profile
profile =
    Profile "Marei Kikukawa / Calmery" "static/img/icon.jpeg" "Kumamoto, Japan" "Interested in Elm and Web Assembly"


repositories : List Repository
repositories =
    [ Repository "calmery" "calmery.me" "My website written in Elm" "https://github.com/calmery/calmery.me"
    , Repository "calmery" "Pawopy" "A Python wrapper for the Mastodon API like tweepy" "https://github.com/calmery/Pawopy"
    ]


articles : List Article
articles =
    [ Article "LINEの40万インターンに参加してきた" "2017-09-03" [ Tag "Internship" "http://calmery.hatenablog.com/archive/category/Internship", Tag "LINE" "http://calmery.hatenablog.com/archive/category/LINE" ] "http://calmery.hatenablog.com/entry/2017/09/03/190002"
    ]



-- Model


type alias Model =
    String


init : ( Model, Cmd Msg )
init =
    ( "", setTitle "Calmery.me" )



-- Message


type Msg
    = NoOp



-- View


wrapMenu : Menu -> Html Msg
wrapMenu menu =
    div [ class "menu-wrapper clearfix" ]
        [ div [ class "menu-icon" ]
            [ img [ src menu.icon ] [] ]
        , div [ class "menu-name" ]
            [ text menu.name ]
        ]


createMenuView : List Menu -> Html Msg
createMenuView menus =
    div [ id "menus" ] <|
        List.append
            (List.append [ div [ class "label" ] [ text "Links" ] ]
                (List.map
                    (\menu ->
                        a [ href menu.href ]
                            [ div [ class "menu" ]
                                [ wrapMenu menu
                                ]
                            ]
                    )
                    menus
                )
            )
            [ a [ href spMenu.href ]
                [ div [ class "menu", style [ ( "bottom", "50px" ), ( "position", "absolute" ) ] ]
                    [ wrapMenu spMenu
                    ]
                ]
            ]


footer : Html Msg
footer =
    div [ id "copyright" ]
        [ text "CopyRight 2017 Calmery All Rights Reserved" ]


createProfileView : Profile -> Html Msg
createProfileView profile =
    div [ id "profile" ]
        [ div [ id "profile-line" ] []
        , div [ id "profile-introduction" ] <|
            createProfileIntroduction profile
        , div [ id "profile-icon" ]
            [ img [ src profile.icon ] [] ]
        ]


createProfileIntroduction : Profile -> List (Html Msg)
createProfileIntroduction profile =
    [ div [ class "clearfix" ]
        [ div [ id "profile-name" ] [ text profile.name ]
        , div [ id "profile-location" ] [ text profile.location ]
        ]
    , div [ id "profile-bio" ] [ text profile.bio ]
    ]


createRepositoryView : List Repository -> Html Msg
createRepositoryView repositories =
    div [ class "content" ]
        (List.append
            [ div [ class "content-title clearfix" ]
                [ div [ class "content-icon" ]
                    [ img [ src "static/img/github-content-icon.png" ] [] ]
                , div [ class "content-name" ] [ text "Repositories - GitHub" ]
                ]
            ]
            (List.map
                (\repository ->
                    a [ href repository.href ]
                        [ div [ class "repository-content" ]
                            [ div [ class "repository-name" ] [ text <| repository.owner ++ "/" ++ repository.name ]
                            , div [ class "repository-description" ] [ text <| repository.description ]
                            ]
                        ]
                )
                repositories
            )
        )


createArticleView : List Article -> Html Msg
createArticleView articles =
    div [ class "content" ]
        (List.append
            [ div [ class "content-title clearfix" ]
                [ div [ class "content-icon" ]
                    [ img [ src "static/img/blog-content-icon.png" ] [] ]
                , div [ class "content-name" ] [ text "Articles - Hatena Blog" ]
                ]
            ]
            (List.map
                (\article ->
                    a [ href article.href ]
                        [ div [ class "blog-content" ]
                            [ div [ class "created-at" ] [ text article.created_at ]
                            , div [ class "blog-name" ] [ text article.name ]
                            , div [ class "blog-tags" ]
                                (List.map
                                    (\tag ->
                                        a [ href tag.href ] [ div [ class "blog-tag" ] [ text tag.name ] ]
                                    )
                                    article.tags
                                )
                            ]
                        ]
                )
                articles
            )
        )


createBoardView : List Repository -> List Article -> Html Msg
createBoardView repositories articles =
    div [ id "board" ]
        [ div [ class "label" ] [ text "Board" ]
        , div []
            [ createRepositoryView repositories
            , createArticleView articles
            ]
        ]


view : Model -> Html Msg
view model =
    div [ id "container" ]
        [ createProfileView profile
        , div [ id "contents" ]
            [ createMenuView menus
            , createBoardView repositories articles
            , footer
            ]
        ]



-- Update


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



-- Main


main : Program Never Model Msg
main =
    program
        { init = init
        , view = view
        , update = update
        , subscriptions = always Sub.none
        }
