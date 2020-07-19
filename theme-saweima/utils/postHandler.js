export function getCategories(page, map) {
  const { categories, category } = page.frontmatter;

  const target = categories || category;
  return target ? target.map(item => ({
    text: map[item].key,
    path: map[item].path
  })) : null
}

export function getTags(page, map) {
  const { tag, tags } = page.frontmatter;
  const target = tag || tags;
  return target ? target.map(item => ({
    text: map[item].key,
    path: map[item].path
  })) : null;
}
