const path = require('path');
const defaultThemeOptions = require('./config/defaultThemeOptions');
const defualtBlogPluginOptions = require('./config/defaultBlogPlugin');

module.exports = (themeConfig, ctx) => {
    // get theme API.
    const { sourceDir, siteConfig } = ctx
    console.log("= text ctx=")
    // console.log(themeConfig);
    // console.log(sourceDir);

    /**
     * Add some basic setting.
     */
    const defaultAlias = {
      '@theme': path.resolve(__dirname),
    }

    /**
     * Add new keyword to themeConfig;
     */

    /** merge default and custom settings. */
    const blogPluginOptions = Object.assign(
      {}, defualtBlogPluginOptions(themeConfig), themeConfig.blogOption
    )
    themeConfig = Object.assign({}, defaultThemeOptions, themeConfig);
    console.log(blogPluginOptions)

    disqusSetting = themeConfig.comment ? themeConfig.comment.disqus : {};

    console.log('====update====')

    return {
        // extend: '@vuepress/theme-default',
        // extendPageData: gen_summary,disqus
        alias: defaultAlias,

        plugins: [
          ['@vuepress/nprogress'],
          ['vuepress-plugin-smooth-scroll'],
          ['@vuepress/plugin-blog', blogPluginOptions],
          ['@vuepress/plugin-search', { searchMaxSuggestions: 10 }],
        ],
    };
}
