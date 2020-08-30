<template>
  <main class="archive-page">
    <slot name="top"/>
    <div class="content-wrapper">
      <header class="archive-header">
        <h1 class="archive-title">{{ $page.title }}</h1>
        <Content />
      </header>
      <h2 class="toc-title">Table of content</h2>
      <section class="chapter-list">
        <CollapsibleGroup
          v-for="(chapter, ckey) in chapters"
          :key="ckey"
          :item="chapter"
          :defaultStatus="true"
          :eventCode="ckey == -1 ? chapter.title: null"
          class="archive-chapter"
        >
          <template slot="title" v-if="ckey != -1">
            <span class="title" >
              {{ckey}}.{{chapter.title}}
            </span>
          </template>

          <li
            v-for="(section , skey) in chapter.sections.list"
            :key="skey"
            class="archive-section"
          >
            <router-link
              :to="section.page.path"
            >
              <span class="section-index" v-if="ckey > -1">
                {{ckey}}-{{section.index}}
              </span>
              <span class="section-name">
                {{section.title}}
              </span>
            </router-link>
          </li>
        </CollapsibleGroup>
      </section>

      <footer class="archive-footer">
        <div class="last-updated">
          Last Updated:
          <time :datetime="$page.lastUpdated">
            {{ $page.lastUpdated }}
          </time>
        </div>
      </footer>
    </div>
    <slot name="down"/>
  </main>
</template>

<script>
import CollapsibleGroup from '@theme/components/common/CollapsibleGroup';

export default {
  components: {
    CollapsibleGroup
  },
  computed: {
    chapters() {
      return this.$page.chapters;
    }
  }

}
</script>

<style lang="stylus">
@import "../styles/wrapper.styl"

.archive-page
  > *
    transition .2s ease
    max-width $widePageWidth
    @extend $content-wrapper, $card-box

  .content-wrapper
    box-sizing content-box
    padding 1rem 2.5rem 2rem
    min-height 80vh


  .archive-header
    padding 1rem .5rem 2rem
    margin-bottom .5rem
    border-bottom 1px solid var(--borderColor)

    .archive-title
      margin-bottom .5rem
      font-size 28px
      font-weight 600

  .toc-title
    font-size 25px
    font-weight 550
    padding-left 1rem
    margin 2rem 0 1.2rem

  .chapter-list
    padding 0 1rem

  .archive-footer
    margin-top 2rem
    padding 1rem .5rem
    border-top 1px solid var(--borderColor)

    .last-updated
      display flex
      justify-content flex-end

  .collapsible-group
    padding 0 .5rem
    margin-bottom .5rem
    .item-list
      padding 0 .5rem

    .collapsible-title
      display flex
      align-items center
      justify-content space-between
      // border-bottom 1px solid var(--borderColor)
      padding .8rem 0

      .title
        font-size 21px
        font-weight 550

    .archive-section
      display flex
      box-sizing border-box
      margin-bottom .5rem
      a
        opacity .6
        color var(--textColor)
        &:hover
          color $accentColor


      @media screen and (min-width $mq-md)
        display inline-block
        width 50%

  @media screen and (min-width $mq-md)
    padding 1rem .5rem 0

  @media screen and (min-width $mq-lg)
    padding 1.5rem .5rem .5rem


</style>
