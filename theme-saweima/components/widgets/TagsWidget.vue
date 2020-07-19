<template>
  <div class="tags-widget widget card-box">
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
  </div>
</template>

<script>
import TagIcon from '@theme/components/icons/TagIcon'

export default {
  components: {
    TagIcon,
  },
  computed: {
    tags() {
      return this.$tag.list;
    },
    mode() {
      return this.$route.meta.pid == 'tag' ? 'rule' : 'block'
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
  .tags
    text-align justify

  .mode-block
    a
      color var(--blurBg)
      text-align center
      opacity .8

    .tag
      display inline-block
      background #999
      border-radius 3px
      transition .2s ease
      padding .2rem .4rem
      min-width 2rem
      margin 0 .2rem 1rem
      line-height normal

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
