const { add } = require("lodash")

module.exports = {
// Options
  description: ($page, $site) => $page.frontmatter.description || ($page.excerpt && $page.excerpt.replace(/(\<\/?.\>)/gm, '')) || $site.description || "",
  author: (_, $site) => $site.themeConfig.author.name || '',
  modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),

  customMeta: (add, context) => {
    const { $page } = context;
    const description = $page.frontmatter.description || ($page.excerpt && $page.excerpt.replace(/(\<\/?.\>)/gm, '')) || '';
    add('description', description);
  }
}
