module.exports = (themeConfig) => ({
  directories: [
    {
      id: 'post',
      dirname: '_posts',
      path: '/',
      itemPermalink: '/:slug',
      layout: 'IndexPost',
      itemLayout: 'Page',
      title: themeConfig.listTitle || 'Home',
      pagination: {
        layout: 'IndexPost'
      },
    },
    {
      id: 'archive',
      dirname: '_archives',
      path: '/archives/',
      itemPermalink: '/archives/:slug',
      layout: 'Archives',
      itemLayout: 'Archive',
    }
  ],
  frontmatters: [
    {
      id: 'tag',
      keys: ['tags', 'tag'],
      path: '/tags/',
      layout: 'IndexKeyword',
      scopeLayout: 'IndexPost',
    },{
      id: 'category',
      keys: ['categories', 'category'],
      path: '/categories/',
      layout: 'IndexKeyword',
      scopeLayout: 'IndexPost',
    }
  ],
  sitemap: {
    hostname:themeConfig.domain
  }
});
