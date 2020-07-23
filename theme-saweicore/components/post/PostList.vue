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
  </div>
</template>

<script>
import PostInfo from './PostInfo'
import PostListItem from './PostListItem'

export default {
  props: {
    mode: { default: 'normal' }
  },
  components: {
    PostInfo,
    PostListItem,
  },
  computed: {
    postList() {
      return this.$pagination.pages;
    },
    staticClasses() {
      return [ `mode-${this.mode}` ]
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

</style>
