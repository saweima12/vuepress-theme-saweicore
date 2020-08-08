module.exports = ctx => ({
  isProd: ctx.isProd,
  nav: [
    { text: 'Home' , path: '/' },
    { text: 'Tag', path: '/tag/'},
    { text: 'Category', path: '/category/'}
  ],
  author: {
  },
  pageOption: {
    defaultPageMode: 'classic'
  },
  blogOption: {
  },
  widgetOption: {
    tagWidgetLength: 8,
    categoryWidgetLength: 8,
  },
});
