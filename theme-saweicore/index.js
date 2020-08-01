const path = require('path');
const defaultThemeOptions = require('./config/defaultThemeOptions');
const defualtBlogPluginOptions = require('./config/defaultBlogPlugin');
const defaultContainerOptions = require('./config/defaultContainerOptions');
const defaultSeoOptions = require('./config/defaultSeoOptions');

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
    const seoPluginOptions = Object.assign(
      {}, defaultSeoOptions, themeConfig.seoOptions
    )
    // console.log(themeConfig)
    finalThemeConfig = Object.assign({}, defaultThemeOptions, themeConfig);
    Object.assign(themeConfig, finalThemeConfig);
    return {
        // extend: '@vuepress/theme-default',
        // extendPageData: gen_summary,disqus
        alias: defaultAlias,

        plugins: [
          ['@vuepress/plugin-blog', blogPluginOptions],
          ['@vuepress/plugin-search', themeConfig.searchOption],
          ['vuepress-plugin-seo', seoPluginOptions],
          ['vuepress-plugin-smooth-scroll', {}],
          ['@vuepress/nprogress', {}],
          ...defaultContainerOptions,
        ],
    };
}
