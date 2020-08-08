<template>
  <div class="tags-widget widget">
    <div class="widget-header">
      <div class="icon">
        <TagIcon/>
      </div>
      <h3 class="title">Tags</h3>
    </div>
    <div
      class="tags"
      :class="staticClasses"
    >
      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.name"
        :to="tag.path"
      >
        <span class="name">
          {{tag.name}}
        </span>
        <span class="amount">
          {{tag.pages.length}}
        </span>
      </router-link>
    </div>
    <div class="more-link" v-if="shouldShowMoreLink">
      <router-link :to="`/tags/`">
        More...
      </router-link>
    </div>
  </div>
</template>

<script>
import TagIcon from '@theme/components/icons/TagIcon'
import _ from 'loadsh'

export default {
  components: {
    TagIcon,
  },
  computed: {
    tags() {
      return this.mode == 'block' ? _.shuffle(this.$tag.pages).slice(0, this.sliceNum): this.$tag.pages;
    },
    mode() {
      return this.$route.meta.pid == 'tag' ? 'rule' : 'block'
    },
    sliceNum() {
      const { widgetOption } = this.$themeConfig;
      return widgetOption && widgetOption.tagWidgetLength || 18;
    },
    shouldShowMoreLink() {
      return this.$route.meta.pid !== 'tag' && this.$tag.length > this.sliceNum;
    },
    staticClasses() {
      return [ `mode-${this.mode}` ]
    }
  }
}
</script>

<style lang="stylus">
@import "../../styles/widget.styl"

.tags-widget
  padding 1rem
  .tags
    text-align justify

  .more-link
    @extend $widget-more-link

  .mode-block
    a
      color var(--blurBg)
      font-size 13px
      text-align center
      opacity .8

    .tag
      display inline-block
      background #999
      border-radius 3px
      transition .2s ease
      padding 0 .4rem
      min-width 2em
      margin 0 .2rem 1rem
      line-height 1.4rem
      vertical-align middle

      &:hover
        background var(--textLightenColor)
        transform scale(1.1)

    .amount
      display none


  .mode-rule
    @extend $rule-widget

    .tag
      .name
        @extend $rule-widget-name
      .amount
        display inline-block
        @extend $rule-widget-amount

</style>
