/**
 *
 * @param {*} page
 * @param {*} siteData
 */
export function infuserAuthor(page, siteData) {
  if (page.pid != 'post')
    return;

  const { frontmatter: { author } } = page;
  const { themeConfig } = siteData;

  if (author) {
    page.author = author
  } else {
    if (siteData.themeConfig.author) {
      page.author = themeConfig.author
    }
  }
}
