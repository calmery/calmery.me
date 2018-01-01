module Contents exposing (..)


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
    , Menu "Qiita" "static/img/qiita.png" "https://qiita.com/calmery"
    , Menu "Hatenablog" "static/img/hatenablog.png" "http://calmery.hatenablog.com"
    , Menu "Mail" "static/img/mail.png" "mailto:contact@calmery.me"
    ]


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
    [ Article "ElmとElectronでデスクトップアプリを作ってみた" "2017-12-15" [ Tag "Elm" "http://calmery.hatenablog.com/archive/category/Elm", Tag "Electron" "http://calmery.hatenablog.com/archive/category/Electron" ] "http://calmery.hatenablog.com/entry/2017/12/15/005614"
    , Article "LINEの40万インターンに参加してきた" "2017-09-03" [ Tag "Internship" "http://calmery.hatenablog.com/archive/category/Internship", Tag "LINE" "http://calmery.hatenablog.com/archive/category/LINE" ] "http://calmery.hatenablog.com/entry/2017/09/03/190002"
    ]
