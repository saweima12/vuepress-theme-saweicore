const nav = require("./config/nav")

module.exports = {
    title: 'SaweiCore Stu.',
    description: '',
    theme: 'vuepress-theme-saweicore',
    // theme: require.resolve('../../theme-saweicore'), // use local theme.

    locale: {
      '/' : "zh-TW"
    },

    themeConfig: {
      listTitle: 'Home',  // PostList Page's title.
      nav: nav,
      logo: "/img/logo.png",
      author: {
        // base author setting.
        avatar: "https://avatars3.githubusercontent.com/u/62002212?s=400&u=632d38b62b5c3937c1fa35ea1ca06ab8e180eaf9&v=4",
        name: "Saweima",
        summary: "絕望工程師",
        desc: "喜歡新奇事物的探索者，長年在網路上挖掘新資訊及技巧，小到特定知識大到人生哲學， \
            想要更多的知識、更多的經驗，現職為旅遊業工程師。 主司後端、但對前端也有所涉略。",
        socials: {
          plurk: {
            link: "https://plurk.com/tassis"
          },
          github: {
            link: "https://github.com/saweima12"
          }
        }
      },
      // pageOption: {
      //   defaultPageMode: 'classic'   // classic || vocus

      // },
      // // Plugin blog setting
      blogOption: {
        // comment: {
          // service: 'disqus',
          // shortname: ''
        // }
      },
      // searchOption: {
      //   searchMaxSuggestions: 10
      // },
    },
  plugins: [
    // ['@vuepress/last-updated']
  ]
}
