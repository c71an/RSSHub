export default {
  "weibo": {
    "routes": {
      "/friends/:routeParams?": {
        "path": "/friends/:routeParams?",
        "categories": [
          "social-media"
        ],
        "example": "/weibo/friends",
        "parameters": {
          "routeParams": "额外参数；请参阅上面的说明和表格"
        },
        "features": {
          "requireConfig": [
            {
              "name": "WEIBO_COOKIES",
              "optional": true,
              "description": ""
            }
          ],
          "requirePuppeteer": false,
          "antiCrawler": false,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "radar": [
          {
            "source": [
              "weibo.com/"
            ],
            "target": "/friends"
          }
        ],
        "name": "最新关注时间线",
        "maintainers": [
          "CaoMeiYouRen"
        ],
        "url": "weibo.com/",
        "description": "::: warning\n  此方案必须使用用户`Cookie`进行抓取\n\n  因微博 cookies 的过期与更新方案未经验证，部署一次 Cookie 的有效时长未知\n\n  微博用户 Cookie 的配置可参照部署文档\n:::",
        "location": "friends.ts",
        "module": () => import('@/routes/weibo/friends.ts')
      },
      "/group/:gid/:gname?/:routeParams?": {
        "path": "/group/:gid/:gname?/:routeParams?",
        "categories": [
          "social-media"
        ],
        "example": "/weibo/group/4541216424989965",
        "parameters": {
          "gid": "分组id, 在网页版分组地址栏末尾`?gid=`处获取",
          "gname": "分组显示名称; 默认为: `微博分组`",
          "routeParams": "额外参数；请参阅上面的说明和表格"
        },
        "features": {
          "requireConfig": [
            {
              "name": "WEIBO_COOKIES",
              "optional": true,
              "description": ""
            }
          ],
          "requirePuppeteer": false,
          "antiCrawler": false,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "name": "自定义分组",
        "maintainers": [
          "monologconnor",
          "Rongronggg9"
        ],
        "description": "::: warning\n  由于微博官方未提供自定义分组相关 api, 此方案必须使用用户`Cookie`进行抓取\n\n  因微博 cookies 的过期与更新方案未经验证，部署一次 Cookie 的有效时长未知\n\n  微博用户 Cookie 的配置可参照部署文档\n:::",
        "location": "group.ts",
        "module": () => import('@/routes/weibo/group.ts')
      },
      "/keyword/:keyword/:routeParams?": {
        "path": "/keyword/:keyword/:routeParams?",
        "categories": [
          "social-media"
        ],
        "view": 1,
        "example": "/weibo/keyword/RSSHub",
        "parameters": {
          "keyword": "你想订阅的微博关键词",
          "routeParams": "额外参数；请参阅上面的说明和表格"
        },
        "features": {
          "requireConfig": [
            {
              "name": "WEIBO_COOKIES",
              "optional": true,
              "description": ""
            }
          ],
          "requirePuppeteer": true,
          "antiCrawler": false,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "name": "关键词",
        "maintainers": [
          "DIYgod",
          "Rongronggg9"
        ],
        "location": "keyword.ts",
        "module": () => import('@/routes/weibo/keyword.ts')
      },
      "/oasis/user/:userid": {
        "path": "/oasis/user/:userid",
        "categories": [
          "social-media"
        ],
        "example": "/weibo/oasis/user/1990895721",
        "parameters": {
          "userid": "用户 id, 可在用户主页 URL 中找到"
        },
        "features": {
          "requireConfig": false,
          "requirePuppeteer": false,
          "antiCrawler": false,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "radar": [
          {
            "source": [
              "m.weibo.cn/u/:uid",
              "m.weibo.cn/profile/:uid"
            ],
            "target": "/user/:uid"
          }
        ],
        "name": "绿洲用户",
        "maintainers": [
          "kt286"
        ],
        "location": "oasis/user.ts",
        "module": () => import('@/routes/weibo/oasis/user.ts')
      },
      "/search/hot/:fulltext?": {
        "path": "/search/hot/:fulltext?",
        "categories": [
          "social-media"
        ],
        "view": 1,
        "example": "/weibo/search/hot",
        "parameters": {
          "fulltext": {
            "description": "\n-   使用`/weibo/search/hot`可以获取热搜条目列表；\n-   使用`/weibo/search/hot/fulltext`可以进一步获取热搜条目下的摘要信息（不含图片视频）；\n-   使用`/weibo/search/hot/fulltext?pic=true`可以获取图片缩略（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）\n-   使用`/weibo/search/hot/fulltext?pic=true&fullpic=true`可以获取 Original 图片（但需要配合额外的手段，例如浏览器上的 Header Editor 等来修改 referer 参数为`https://weibo.com`，以规避微博的外链限制，否则图片无法显示。）"
          }
        },
        "features": {
          "requireConfig": [
            {
              "name": "WEIBO_COOKIES",
              "optional": true,
              "description": ""
            }
          ],
          "requirePuppeteer": true,
          "antiCrawler": false,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "radar": [
          {
            "source": [
              "s.weibo.com/top/summary"
            ]
          }
        ],
        "name": "热搜榜",
        "maintainers": [
          "xyqfer",
          "shinemoon"
        ],
        "url": "s.weibo.com/top/summary",
        "location": "search/hot.tsx",
        "module": () => import('@/routes/weibo/search/hot.tsx')
      },
      "/super_index/:id/:type?/:routeParams?": {
        "path": "/super_index/:id/:type?/:routeParams?",
        "categories": [
          "social-media"
        ],
        "example": "/weibo/super_index/1008084989d223732bf6f02f75ea30efad58a9/sort_time",
        "parameters": {
          "id": "超话ID",
          "type": "类型：见下表",
          "routeParams": "额外参数；请参阅上面的说明和表格"
        },
        "features": {
          "requireConfig": [
            {
              "name": "WEIBO_COOKIES",
              "optional": true,
              "description": ""
            }
          ],
          "requirePuppeteer": true,
          "antiCrawler": false,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "radar": [
          {
            "source": [
              "weibo.com/p/:id/super_index"
            ],
            "target": "/super_index/:id"
          }
        ],
        "name": "超话",
        "maintainers": [
          "zengxs",
          "Rongronggg9"
        ],
        "description": "| type       | 备注             |\n| ---------- | ---------------- |\n| soul       | 精华             |\n| video      | 视频（暂不支持） |\n| album      | 相册（暂不支持） |\n| hot_sort  | 热门             |\n| sort_time | 最新帖子         |\n| feed       | 最新评论         |",
        "location": "super-index.ts",
        "module": () => import('@/routes/weibo/super-index.ts')
      },
      "/timeline/:uid/:feature?/:routeParams?": {
        "path": "/timeline/:uid/:feature?/:routeParams?",
        "categories": [
          "social-media"
        ],
        "example": "/weibo/timeline/3306934123",
        "parameters": {
          "uid": "用户的uid",
          "feature": "过滤类型ID，0：全部、1：原创、2：图片、3：视频、4：音乐，默认为0。",
          "routeParams": "额外参数；请参阅上面的说明和表格"
        },
        "features": {
          "requireConfig": [
            {
              "name": "WEIBO_APP_KEY",
              "description": ""
            },
            {
              "name": "WEIBO_REDIRECT_URL",
              "description": ""
            }
          ],
          "requirePuppeteer": false,
          "antiCrawler": false,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "name": "个人时间线",
        "maintainers": [
          "zytomorrow",
          "DIYgod",
          "Rongronggg9"
        ],
        "description": "::: warning\n  需要对应用户打开页面进行授权生成 token 才能生成内容\n\n  自部署需要申请并配置微博 key，具体见部署文档\n:::",
        "location": "timeline.ts",
        "module": () => import('@/routes/weibo/timeline.ts')
      },
      "/user_bookmarks/:uid/:routeParams?": {
        "path": "/user_bookmarks/:uid/:routeParams?",
        "categories": [
          "social-media"
        ],
        "example": "/weibo/user_bookmarks/1195230310",
        "parameters": {
          "uid": "用户 id, 博主主页打开控制台执行 `$CONFIG.oid` 获取",
          "routeParams": "额外参数；请参阅上面的说明和表格；特别地，当 `routeParams=1` 时开启微博视频显示"
        },
        "features": {
          "requireConfig": [
            {
              "name": "WEIBO_COOKIES",
              "optional": true,
              "description": ""
            }
          ],
          "requirePuppeteer": false,
          "antiCrawler": false,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "radar": [
          {
            "source": [
              "weibo.com/"
            ],
            "target": "/user_bookmarks/:uid"
          }
        ],
        "name": "用户收藏动态",
        "maintainers": [
          "cztchoice"
        ],
        "url": "weibo.com/",
        "description": "::: warning\n  此方案必须使用用户`Cookie`进行抓取，只可以获取本人的收藏动态\n\n  因微博 cookies 的过期与更新方案未经验证，部署一次 Cookie 的有效时长未知\n\n  微博用户 Cookie 的配置可参照部署文档\n:::",
        "location": "user-bookmarks.ts",
        "module": () => import('@/routes/weibo/user-bookmarks.ts')
      },
      "/user/:uid/:routeParams?": {
        "path": "/user/:uid/:routeParams?",
        "categories": [
          "social-media"
        ],
        "view": 1,
        "example": "/weibo/user/1195230310",
        "parameters": {
          "uid": "用户 id, 博主主页打开控制台执行 `$CONFIG.oid` 获取",
          "routeParams": "额外参数；请参阅上面的说明和表格；特别地，当 `routeParams=1` 时开启微博视频显示"
        },
        "features": {
          "requireConfig": [
            {
              "name": "WEIBO_COOKIES",
              "optional": true,
              "description": ""
            }
          ],
          "requirePuppeteer": true,
          "antiCrawler": true,
          "supportBT": false,
          "supportPodcast": false,
          "supportScihub": false
        },
        "radar": [
          {
            "source": [
              "m.weibo.cn/u/:uid",
              "m.weibo.cn/profile/:uid"
            ],
            "target": "/user/:uid"
          },
          {
            "source": [
              "weibo.com/u/:uid"
            ],
            "target": "/user/:uid"
          },
          {
            "source": [
              "www.weibo.com/u/:uid"
            ],
            "target": "/user/:uid"
          }
        ],
        "name": "博主",
        "maintainers": [
          "DIYgod",
          "iplusx",
          "Rongronggg9",
          "Konano"
        ],
        "description": "::: warning\n  部分博主仅登录可见，未提供 Cookie 的情况下不支持订阅，可以通过打开 `https://m.weibo.cn/u/:uid` 验证\n:::",
        "location": "user.ts",
        "module": () => import('@/routes/weibo/user.ts')
      }
    },
    "apiRoutes": {},
    "name": "微博",
    "url": "weibo.com",
    "description": "::: warning\n微博会针对请求的来源地区返回不同的结果。一个已知的例子为：部分视频因未知原因仅限中国大陆境内访问 (CDN 域名为 `locallimit.us.sinaimg.cn` 而非 `f.video.weibocdn.com`)。若一条微博含有这种视频且 RSSHub 实例部署在境外，抓取到的微博可能不含视频。将 RSSHub 部署在境内有助于抓取这种视频，但阅读器也必须处于境内网络环境以加载视频。\n:::\n\n::: warning\n大部分路由均需要 Cookies 才能获取。优先使用 `WEIBO_COOKIES`；未设置时尝试使用 Puppeteer 获取访客 Cookies。部分路由不支持访客访问，则必须设置 `WEIBO_COOKIES`，详见各个路由的文档。\n:::\n\n对于微博内容，在 `routeParams` 参数中以 query string 格式指定选项，可以控制输出的样式\n\n| 键                         | 含义                                                               | 接受的值       | 默认值                              |\n| -------------------------- | ------------------------------------------------------------------ | -------------- | ----------------------------------- |\n| readable                   | 是否开启细节排版可读性优化                                         | 0/1/true/false | false                               |\n| authorNameBold             | 是否加粗作者名字                                                   | 0/1/true/false | false                               |\n| showAuthorInTitle          | 是否在标题处显示作者                                               | 0/1/true/false | false（`/weibo/keyword/`中为 true） |\n| showAuthorInDesc           | 是否在正文处显示作者                                               | 0/1/true/false | false（`/weibo/keyword/`中为 true） |\n| showAuthorAvatarInDesc     | 是否在正文处显示作者头像（若阅读器会提取正文图片，不建议开启）     | 0/1/true/false | false                               |\n| showEmojiForRetweet        | 显示 “🔁” 取代 “转发” 两个字                                       | 0/1/true/false | false                               |\n| showRetweetTextInTitle     | 在标题出显示转发评论（置为 false 则在标题只显示被转发微博）        | 0/1/true/false | true                                |\n| addLinkForPics             | 为图片添加可点击的链接                                             | 0/1/true/false | false                               |\n| showTimestampInDescription | 在正文处显示被转发微博的时间戳                                     | 0/1/true/false | false                               |\n| widthOfPics                | 微博配图宽（生效取决于阅读器）                                     | 不指定 / 数字  | 不指定                              |\n| heightOfPics               | 微博配图高（生效取决于阅读器）                                     | 不指定 / 数字  | 不指定                              |\n| sizeOfAuthorAvatar         | 作者头像大小                                                       | 数字           | 48                                  |\n| displayVideo               | 是否直接显示微博视频和 Live Photo，只在博主或个人时间线 RSS 中有效 | 0/1/true/false | true                                |\n| displayArticle             | 是否直接显示微博文章，只在博主或个人时间线 RSS 中有效              | 0/1/true/false | false                               |\n| displayComments            | 是否直接显示热门评论，只在博主或个人时间线 RSS 中有效              | 0/1/true/false | false                               |\n| showEmojiInDescription     | 是否展示正文和评论中的微博表情，关闭则替换为 `[表情名]`            | 0/1/true/false | true                                |\n| showLinkIconInDescription  | 是否展示正文和评论中的链接图标                                     | 0/1/true/false | true                                |\n| preferMobileLink           | 是否使用移动版链接（默认使用 PC 版）                               | 0/1/true/false | false                               |\n| showRetweeted              | 是否显示转发的微博                                                 | 0/1/true/false | true                               |\n| showBloggerIcons           | 是否显示评论中博主的标志，只在显示热门评论时有效                                           | 0/1/true/false | false                               |\n\n指定更多与默认值不同的参数选项可以改善 RSS 的可读性，如\n\n[https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150](https://rsshub.app/weibo/user/1642909335/readable=1&authorNameBold=1&showAuthorInTitle=1&showAuthorInDesc=1&showAuthorAvatarInDesc=1&showEmojiForRetweet=1&showRetweetTextInTitle=0&addLinkForPics=1&showTimestampInDescription=1&showTimestampInDescription=1&heightOfPics=150)\n\n的效果为\n\n<img loading=\"lazy\" src=\"/img/readable-weibo.png\" alt=\"微博小秘书的可读微博 RSS\" />",
    "lang": "zh-CN"
  },
  "7kid": {
    "name": "7kid",
    "routes": {
      "/:schoolId": {
        "path": "/:schoolId",
        "name": "文章列表",
        "url": "https://kidcms.7kid.com",
        "categories": [
          "education"
        ],
        "example": "/7kid/718336990898551810",
        "parameters": {
          "schoolId": "学校 ID"
        },
        "maintainers": [
          "c71an"
        ],
        "location": "index.ts",
        "module": () => import('@/routes/7kid/index.ts')
      }
    },
    "apiRoutes": {}
  },
  "chinacdc": {
    "name": "chinacdc",
    "routes": {
      "/week": {
        "path": "/week",
        "name": "全国急性呼吸道传染病哨点监测情况",
        "url": "https://www.chinacdc.cn/jksj/jksj04_14275/",
        "categories": [
          "health"
        ],
        "example": "/chinacdc/week",
        "maintainers": [
          "c71an"
        ],
        "location": "week.ts",
        "module": () => import('@/routes/chinacdc/week.ts')
      }
    },
    "apiRoutes": {}
  },
  "gov": {
    "name": "gov",
    "routes": {
      "/zxzc": {
        "path": "/zxzc",
        "name": "最新政策",
        "url": "https://www.gov.cn/zhengce/zuixin/",
        "categories": [
          "government"
        ],
        "example": "/gov/zxzc",
        "maintainers": [
          "c71an"
        ],
        "location": "zxzc.ts",
        "module": () => import('@/routes/gov/zxzc.ts')
      }
    },
    "apiRoutes": {}
  },
  "komatsu": {
    "name": "komatsu",
    "routes": {
      "/week": {
        "path": "/week",
        "categories": [
          "health"
        ],
        "example": "/komatsu/week",
        "url": "https://www.city.komatsu.lg.jp/soshiki/1042/surveillance/14588.html",
        "name": "小松市 下水モニタリング",
        "maintainers": [
          "c71an"
        ],
        "allowEmpty": false,
        "location": "week.ts",
        "module": () => import('@/routes/komatsu/week.ts')
      }
    },
    "apiRoutes": {}
  },
  "pcb": {
    "name": "pcb",
    "routes": {
      "/sjjd": {
        "path": "/sjjd",
        "name": "数据解读",
        "url": "http://www.pbc.gov.cn/diaochatongjisi/116219/116225/index.html",
        "categories": [
          "finance"
        ],
        "example": "/pbc/sjjd",
        "maintainers": [
          "c71an"
        ],
        "location": "sjjd.ts",
        "module": () => import('@/routes/pcb/sjjd.ts')
      }
    },
    "apiRoutes": {}
  },
  "ssm": {
    "name": "ssm",
    "routes": {
      "/week": {
        "path": "/week",
        "name": "流感樣疾病和新冠病毒感染監測",
        "url": "https://www.ssm.gov.mo/apps1/statistics/%E6%B5%81%E6%84%9F%E6%A8%A3%E7%96%BE%E7%97%85%E5%92%8C%E6%96%B0%E5%86%A0%E7%97%85%E6%AF%92%E6%84%9F%E6%9F%93%E7%9B%A3%E6%B8%AC",
        "categories": [
          "government",
          "health"
        ],
        "example": "/ssm/week",
        "maintainers": [
          "c71an"
        ],
        "location": "week.ts",
        "module": () => import('@/routes/ssm/week.ts')
      }
    },
    "apiRoutes": {}
  },
  "stats": {
    "name": "stats",
    "routes": {
      "/sjfb": {
        "path": "/sjfb",
        "name": "最新数据发布",
        "url": "https://www.stats.gov.cn/sj/zxfb/",
        "categories": [
          "government"
        ],
        "example": "/stats/sjfb",
        "maintainers": [
          "c71an"
        ],
        "location": "sjfb.ts",
        "module": () => import('@/routes/stats/sjfb.ts')
      }
    },
    "apiRoutes": {}
  },
  "zaixs": {
    "name": "zaixs",
    "routes": {
      "/:fid": {
        "path": "/:fid",
        "name": "社区板块精华帖",
        "url": "https://share.zaixs.com",
        "categories": [
          "bbs"
        ],
        "example": "/zaixs/112",
        "parameters": {
          "fid": "板块 ID"
        },
        "maintainers": [
          "c71an"
        ],
        "location": "index.ts",
        "module": () => import('@/routes/zaixs/index.ts')
      }
    },
    "apiRoutes": {}
  }
}