import GlobalMixin from './mixins';
import { infuserAuthor } from './extension/page';


export default ({
  Vue,     // VuePress 正在使用的 Vue 構造函數
  options,
  router,
  siteData // website metadata.
}) => {
  // 修正 ISO8601 時間格式為普通格式 output: 2020-02-02
  // 增加 author info.
  siteData.pages.map(item => {
    const { frontmatter: { date } } = item
    if (typeof date === 'string' && date.charAt(date.length-1) === 'Z') {
      item.frontmatter.date = repairUTCDate(date)
    }

    infuserAuthor(item, siteData);
  })

  Vue.mixin(GlobalMixin);
}

// 修正 ISO8601 時間格式為普通格式 output: 2020-02-02
function repairUTCDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  return `${date.getUTCFullYear()}-${zero(date.getUTCMonth()+1)}-${zero(date.getUTCDate())} ${zero(date.getUTCHours())}:${zero(date.getUTCMinutes())}:${zero(date.getUTCSeconds())}`;
}

// 自動補 0
function zero(d){
  return d.toString().padStart(2,'0')
}
