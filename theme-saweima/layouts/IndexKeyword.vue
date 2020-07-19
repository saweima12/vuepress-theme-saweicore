<template>
  <div class="index-keyword-page">
    <div class="content-wrapper">
      <section class="categories " v-if="pid == 'category'">
        <h2 class="title">
          Categories
        </h2>
        <div class="links">
          <router-link
            v-for="category in categories"
            :key="category.name"
            :to="category.path"
          >
            <div class="category">
              <div class="name">{{category.name}}</div>
              <div class="amount">{{category.pages.length}}</div>
            </div>
          </router-link>
        </div>

      </section>

      <section class="tags" v-if="pid == 'tag'">
        <h2 class="title">
          Tags
        </h2>
        <div class="links">
          <router-link
            v-for="tag in tags"
            :key="tag.name"
            :to="tag.path"
          >
            <div class="tag">
              <div class="name">{{ tag.name}}</div>
              <div class="amount">{{ tag.pages.length}}</div>
            </div>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  computed:{
    categories() {
      return this.$category.pages
    },
    tags() {
      return this.$tag.pages
    },
    pid() {
      return this.$route.meta.pid;
    }
  }

}
</script>

<style lang="stylus">
@import "../styles/wrapper.styl"

.index-keyword-page
  padding .5rem 0
  transition .2s ease

  > *
    transition .2s ease
    @extend $content-wrapper

  @media screen and (min-width $mq-md)
    padding 1rem .5rem

  @media screen and (min-width $mq-lg)
    padding 1.5rem .5rem

  a
    color var(--textColor)

    &:hover
      color $accentColor

  > *:nth-child(even)
    border-top 1px solid #eee


  .categories, .tags
    width 100%
    display inline-block
    padding .5rem
    .links
      padding .5rem 0
      margin 0 auto

      > a
        // background var(--bodyBg)
        font-weight 500
        border 1px solid var(--borderColor)
        display inline-block
        min-width 2rem
        width 45%
        margin .4rem .2rem
        line-height 1.4rem
        padding .2rem .5rem

        > *
          display flex
          justify-content space-between
          padding .5rem

        &:hover
          background $accentColor
          color #fff

        @media screen and (min-width $mq-md)
          border-radius 5px



</style>
