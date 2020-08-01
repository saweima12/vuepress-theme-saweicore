const path = require('path');
const defaultThemeOptions = require('./config/defaultThemeOptions');
const defualtBlogPluginOptions = require('./config/defaultBlogPlugin');
const defaultContainerOptions = require('./config/defaultContainerOptions');

module.exports = (themeConfig, ctx) => {
    // get theme API.
    const { sourceDir, siteConfig } = ctx;

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
    // console.log(themeConfig)
    finalThemeConfig = Object.assign({}, defaultThemeOptions, themeConfig);
    Object.assign(themeConfig, finalThemeConfig);

    return {
        // extend: '@vuepress/theme-default',
        // extendPageData: gen_summary,disqus
        alias: defaultAlias,

        plugins: [
          ['@vuepress/nprogress'],
          ['vuepress-plugin-smooth-scroll'],
          ['@vuepress/plugin-blog', blogPluginOptions],
          ['@vuepress/plugin-search', themeConfig.searchOption],
          ...defaultContainerOptions,
        ],
    };
}
