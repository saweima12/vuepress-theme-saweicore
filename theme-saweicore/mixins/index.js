import { getArchives } from '@theme/utils/archiveHandler';
import { getJournalPosts } from '@theme/utils/postHandler';

export default {
  computed: {
    $archive() {
      const { pages } = this.$site;
      return getArchives(pages);
    },
    $post() {
      const { pages } = this.$site;
      let posts = getJournalPosts(pages);
      let sortPages = posts.sort((a,b)=> {
        return a.frontmatter.date > b.frontmatter.date ? 1
        : a.frontmatter.date == b.frontmatter.date ? 0 : -1
      })

      return {
        pages: sortPages,
        length: posts.length,
      }
    }
  }
}
