<template>
  <div class="post-list" :class="staticClasses">
    <transition-group name="list">
      <PostListItem
        :class="`list-item`"
        v-for="post in postList"
        :key="post.key"
        :post="post"
        :mode="mode"
      />
    </transition-group>
    <div class="list-pagination">
      <Pagination v-if="shouldShowPagination"/>
    </div>
  </div>
</template>

<script>
import PostInfo from './PostInfo'
import PostListItem from './PostListItem'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'


export default {
  props: {
    mode: { default: 'normal' }
  },
  components: {
    PostInfo,
    PostListItem,
    Pagination
  },
  computed: {
    postList() {
      return this.$pagination.pages || this.$post.pages;
    },
    shouldShowPagination() {
      return this.$pagination
        && (this.$pagination.hasNext || this.$pagination.hasPrev)
    },
    staticClasses() {
      return `mode-${this.mode}`
    }
  }
}
</script>

<style lang="stylus">
.post-list
  transition .2s ease

  .list-item
    display: flex;

  .list-enter-active, .list-leave-active
    transition: all .3s ease;

  .list-enter, .list-leave-to
  /* .list-leave-active for below version 2.1.8 */
    opacity: 0;
    transform: translateX(-40px);

  .list-move
    transition transform .3s ease

  .list-leave-active
    position: absolute;
    opacity 0
    left 0

.list-pagination
  width 100%

  .pagination
    width 100%
    text-align center

    > li
      display inline-block

@media screen and (min-width $mq-lg)
  .post-list.mode-simple
      padding 0 1rem
      width $content-width

@media screen and (min-width $mq-md)
  .list-pagination
    .pagination
      text-align left


</style>
