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
  fofTips: [
    '看來這個網址有問題...?',
    '喔不...出現了些問題....',
    '什麼都沒找到、什麼都沒看到。',
    '滅びのバーストストリーム',
  ],
});
