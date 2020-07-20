<template>
  <div class="post card-box">
    <header class="post-header">
      <h1 class="title">
        <router-link :to="post.path" >
          {{ post.title }}
        </router-link>
      </h1>
      <PostInfo
        :post="post"
      />
    </header>

    <div class="summary" v-if="post.excerpt">
      <div v-html="post.excerpt"/>
    </div>

    <div class="post-footer">
      <div class="tags">
        <div
          class="tag"
          v-for="tag in tags"
          :key="tag.text"
        >
          <NavLink :item="tag"/>
        </div>
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
    post: { required: true }
  },
  components: {
    PostInfo,
    NavLink
  },
  computed: {
    tags() {
      const { map } = this.$tag
      return getTags(this.post, map)
    }
  }
}
</script>

<style lang="stylus">
.post
  padding 1rem 1.5rem .8rem
  margin-bottom .5rem
  transition .3s

  .title
    font-size 1.4rem
    line-height 1.4rem
    font-weight 500
    padding .2rem 0
    a
      color var(--textColor)
      &:hover
        color $accentColor

  .summary
    margin-top 0rem
    padding .8rem 0
    border-top 1px solid var(--borderColor)
    line-height 1.7rem

.post
  .tags
    padding .5rem 0

    .tag
      box-sizing border-box
      display inline-block
      vertical-align middle
      margin 0 .5rem .6rem 0
      padding .3rem
      background #999
      border-radius 3px
      line-height 1.2rem

      a
        color #fff

@media screen and (min-width $mq-lg)
  .post
    margin-bottom 1rem

</style>
