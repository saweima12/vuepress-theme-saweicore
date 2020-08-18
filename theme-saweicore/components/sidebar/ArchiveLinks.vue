<template>
  <div
    class="archive-links"
  >
    <!-- <div class="archive-title">
      {{ archive.title  }}
    </div> -->

    <div
      class="chapter-list"
      v-if="!isEmpty(archive)"
    >
      <CollapsibleGroup
        v-for="(chapter, key) in archive.chapters"
        :item="chapter"
        :key="key"
        :eventCode="`toggle-archive-group`"
        :defaultStatus="$page.key in chapter.sections.map"
      >
        <router-link
          v-for="(section, section_key) in chapter.sections.map"
          :to="section.page.path"
          :key="section_key"
          tag="li"
        >
          <span
            class="item-link"
          >
            {{ section.title }}
          </span>
        </router-link>
      </CollapsibleGroup>
    </div>
  </div>
</template>

<script>
import { isEmpty } from '@theme/utils'
import CollapsibleGroup from '@theme/components/common/CollapsibleGroup';

export default {
  components: {
    CollapsibleGroup,
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
    font-size 22px
    font-weight 600

  .chapter-list
    padding .1rem 0

  .collapsible-group
    margin-bottom .5rem

    .collapsible-title
      font-size 100%
      box-sizing border-box
      padding .2rem .5rem .2rem 2rem

    .title
      font-size 18.5px
      line-height 1.1em
      font-weight 600

    .item-link
      box-sizing border-box

      a
        color var(--codeColor)

    // define transition
    .collaps-enter-active, .collaps-leave-active
      transition all .2s ease


    .collaps-enter, .collaps-leave-to
      ul
        overflow hidden
        max-height 0

    .collaps-leave, .collaps-enter-to
      ul
        max-height 80vh - $navbarHeight


  .collapsible-group
    li
      box-sizing content-box
      cursor pointer
      color var(--textColor)
      padding .2rem 2rem .3rem 3rem

      &:hover, &.router-link-exact-active

        .item-link
          color $accentColor

        .item-link
          border-bottom 1px solid $accentColor

      &.router-link-exact-active
        border-left 6px solid $accentColor

</style>
