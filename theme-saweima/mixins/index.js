import { getArchives } from '@theme/utils/archiveHandler';

export default {
  computed: {
    $archive() {
      const { pages } = this.$site;
      return getArchives(pages);
    },
  }
}
