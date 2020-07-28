<template>
  <div class="post">
    <div class="item-wrapper">
      <header class="post-header">
        <h1 class="title">
          <router-link :to="post.path" >
            {{ post.title }}
          </router-link>
        </h1>

      </header>

      <div class="summary" v-if="shouldShowSummary">
        <div v-html="post.excerpt"/>
      </div>

      <div class="post-footer">
        <div class="tags" v-if="shouldShowTags">
          <NavLink
            v-for="tag in tags"
            :key="tag.text"
            :item="tag"
            class="tag"
          />
        </div>
        <PostInfo
          :post="post"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostInfo from'./PostInfo';
import NavLink from '@theme/components/NavLink';
import { getTags } from '@theme/utils/postHandler'


export default {
  props: {
    post: { required: true },
    mode: { required: true }
  },
  components: {
    PostInfo,
    NavLink
  },
  computed: {
    tags() {
      const { map } = this.$tag
      return getTags(this.post, map)
    },
    shouldShowSummary() {
      return this.mode == 'normal' && this.post.excerpt;
    },
    shouldShowTags() {
      return this.mode == 'normal';
    }
  }
}
</script>

<style lang="stylus">
.post
  box-sizing border-box
  padding 1rem 1.5rem
  margin-bottom 1rem
  transition .3s
  @extend $card-box

  .item-wrapper
    width 100%

  p
    margin .5rem 0 1.2rem

  .title
    font-size 1.28rem
    line-height 36px
    font-weight 500
    color var(--textColor)

    a
      color var(--textColor)
      &:hover
        color $accentColor

  .post-header
    padding .5rem 0

  .summary
    padding-top .2rem
    border-top 1px solid var(--borderColor)
    line-height 1.7rem


.post
  &:hover
    box-shadow 0 2px 16px 0 rgba(0, 0, 0, 0.2)

  .tags
    .tag
      box-sizing border-box
      display inline-block
      vertical-align middle
      margin 0 .5rem .6rem 0
      padding .3rem
      background var(--bodyBg)
      font-size 13px
      border-radius 3px
      line-height 1.2rem
      color $accentColor
      transition .2s

      &:hover, &.router-link-exact-active
        background var(--customBlockBg)

.mode-simple
  .title
    font-size 16px

  .post
    padding .2rem 1.5rem

  .post-header
    padding-bottom 0

  .summary, .tags
    display none

  .post-footer
    display flex
    border-top 1px solid var(--borderColor)


@media screen and (min-width $mq-lg)
  .post
    margin-bottom 1rem



</style>
