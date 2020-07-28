// Get all pages.
export function getJournalPosts(pages) {
  return pages.reduce((obj, elm) => {
    const { pid, frontmatter } = elm;
    if (pid == 'post' || frontmatter.journal) {
      obj.push(elm);
    }
    return obj;
  }, [])
}

// Get page's detail
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
