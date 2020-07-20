<template>
  <div
    class="archive-links"
  >
    <div class="archive-title">
      {{ archive.title  }}
    </div>

    <div
      class="chapter-list"
      v-if="!isEmpty(archive)"
    >
      <ArchiveGroup
        v-for="(chapter,key) in archive.chapters"
        :item="chapter"
        :key="key"
      />
    </div>
  </div>
</template>

<script>
import { isEmpty } from '@theme/utils'
import ArchiveGroup from './ArchiveGroup';

export default {
  components: {
    ArchiveGroup
  },
  computed: {
    archive() {
      const { map } = this.$archive;
      const { frontmatter : { archive } } = this.$page;
      return archive && archive.id in map ?
        map[archive.id] : {}
    },
  },
  methods: {
    isEmpty,
  },
}
</script>

<style lang="stylus">
.archive-links
  width 100%
  padding 1rem 0

  ul, li, a
    transition .2s ease

  .archive-title
    padding .35rem 1.2rem .25rem 1.25rem
    font-size 1.2rem
    font-weight bold

  .chapter-list
    padding .5rem 0

  .collapsable-group
    padding .2rem .5rem .2rem 2rem

    .title
      font-size 1.1rem
      font-weight 550
      padding .3rem 0

.collapsable-group

  a
    color var(--textColor)
    &:hover, &.router-link-exact-active
      color $accentColor

    &.router-link-exact-active
      border-bottom 1px solid $accentColor

  .item-link
    padding-left 1rem



</style>
