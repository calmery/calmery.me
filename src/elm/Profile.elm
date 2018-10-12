module Profile exposing (blog, description, icon, location, menus, name, qiita)

import Model exposing (Content, Menu)


name : String
name =
    "Calmery - Marei Kikukawa"


icon : String
icon =
    "assets/profile.jpg"


description : String
description =
    "Software Engineer (Frontend)"


location : String
location =
    "Internship at CyberAgent, Inc."



-- Contents


blog : List Content
blog =
    [ Content "メルカリのインターンシップに行ってきた" "Internship" "2018/10/06" "http://calmery.hatenablog.com/entry/2018/10/06/121419"
    , Content "Mint を試してみた" "Mint" "2018/08/05" "http://calmery.hatenablog.com/entry/2018/08/05/032432"
    ]


qiita : List Content
qiita =
    [ Content "Hyperappを読む" "JavaScript" "2017/12/31" "https://qiita.com/calmery/items/e5015bf2dcefedccddd5"
    , Content "ElmとElectronでデスクトップアプリを作ってみた" "JavaScript" "2017/12/15" "https://qiita.com/calmery/items/b80ee5a9c3aa0b268d02"
    ]



-- Menus


menus : List Menu
menus =
    [ Menu "Portfolio" "https://portfolio.calmery.me"
    , Menu "Blog" "http://calmery.hatenablog.com"
    , Menu "GitHub" "https://github.com/calmery"
    , Menu "Twitter" "https://twitter.com/calmeryme"
    , Menu "Facebook" "https://www.facebook.com/marei.kikukawa"
    , Menu "Qiita" "https://qiita.com/calmery"
    ]
