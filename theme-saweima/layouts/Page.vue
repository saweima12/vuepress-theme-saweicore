<template>
  <main
    class="page"
    :class="{ 'custom' : isCustom }"
  >
    <slot name="top" />
    <!-- main content -->
    <article class="content-wrapper">
      <header class="article-header">
        <ArticleInfo v-if="isArticle"/>
        <h1 class="title" v-if="$page.title">{{$page.title}}</h1>
      </header>
      <Content class="context"/>
    </article>


    <!-- Author Field -->
    <section
      class="author-wrapper"
      v-if="isArticle"
    >
      <AuthorInfo />
    </section>

    <slot name="bottom"/>

    <!-- Comment Field -->
    <Disqus v-if="isDisqusOpen" />
    <Vssue v-if="isVssueOpen"/>

  </main>
</template>

<script>
import EventBus from '@theme/utils/eventbus';
import ArticleInfo from '@theme/components/page/ArticleInfo';
import AuthorInfo from '@theme/components/page/AuthorInfo';
import { Comment } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    ArticleInfo,
    AuthorInfo,
    Comment
  },
  computed: {
    pid () {
      return this.$page.pid
    },
    isArticle() {
      return this.pid == 'post'
    },
    isCustom() {
      return this.$page.frontmatter.custom === true;
    },
    isDisqusOpen() {
      return this.$page.frontmatter.comment !== false &&
            this.$site.themeConfig.comment &&
            this.$site.themeConfig.comment.disqus === true
    },
    isVssueOpen() {
      return this.$page.frontmatter.comment !== false &&
            this.$site.themeConfig.comment &&
            this.$site.themeConfig.comment.vssue === true
    }
  },
  mounted() {
  }
}
</script>

<style lang="stylus">
@import "../styles/wrapper.styl"

.page
  padding .5rem 0
  transition .2s ease

  img
    max-width 100%

  > *
    transition .2s ease
    @extend $content-wrapper

  @media screen and (min-width $mq-md)
    padding 1rem .5rem

  @media screen and (min-width $mq-lg)
    padding 1.5rem .5rem

// PageInfo style
.content-wrapper
  padding-bottom 3rem

  .article-info
    border-bottom 1px solid var(--borderColor)

  .article-header
    margin-bottom 1rem

  .title
    font-size 25px
    font-weight 600
    margin 20px auto 10px

// PageContent style
.content-wrapper
  .context
    *
      box-sizing border-box
      outline none
    p
      font-size 18px
      line-height 1.8em
      margin 20px 0 40px



@media screen and (min-width $mq-lg)
  .sidebar-open:not(.no-sidebar)
    .page
      padding-left $sidebarWidth + .5rem
      padding-right .5rem


@media screen and (min-width $mq-lg + 200)
  .sidebar-open:not(.no-sidebar)
    .page
      padding-left $sidebarWidth
      padding-right 0

</style>
