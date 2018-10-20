module Contents exposing (..)


type alias Profile =
    { name : String
    , icon : String
    , location : String
    , bio : String
    }


profile : Profile
profile =
    Profile "Marei Kikukawa / Calmery" "static/img/icon.jpeg" "Fukuoka, Japan" "Interested in Elm"



-- Menu


type alias Menu =
    { name : String
    , icon : String
    , href : String
    }


menus : List Menu
menus =
    [ Menu "Portfolio" "portfolio.png" "https://portfolio.calmery.me"
    , Menu "Twitter" "twitter.png" "https://twitter.com/calmeryme"
    , Menu "Facebook" "facebook.png" "https://fb.me/marei.kikukawa"
    , Menu "GitHub" "github.png" "https://github.com/calmery"
    , Menu "Qiita" "qiita.png" "https://qiita.com/calmery"
    , Menu "Hatenablog" "hatenablog.png" "http://calmery.hatenablog.com"
    ]



-- Repository


type alias Repository =
    { owner : String
    , name : String
    , description : String
    , href : String
    }


repositories : List Repository
repositories =
    [ Repository "calmery" "Calmery.me" "My website written in Elm" "https://github.com/calmery/calmery.me"
    , Repository "calmery" "Portfolio" "Portfolio" "https://github.com/calmery/Portfolio"
    ]



-- Article


type alias Article =
    { name : String
    , created_at : String
    , tags : List Tag
    , href : String
    }


type alias Tag =
    { name : String
    , href : String
    }


articles : List Article
articles =
    [ Article "ピクシブの春インターンに参加してきた" "2018-03-07" [ Tag "Internship" "http://calmery.hatenablog.com/archive/category/Internship", Tag "Elm" "http://calmery.hatenablog.com/archive/category/Elm" ] "http://calmery.hatenablog.com/entry/2018/03/07/123812"
    , Article "LINEの40万インターンに参加してきた" "2017-09-03" [ Tag "Internship" "http://calmery.hatenablog.com/archive/category/Internship", Tag "LINE" "http://calmery.hatenablog.com/archive/category/LINE" ] "http://calmery.hatenablog.com/entry/2017/09/03/190002"
    ]