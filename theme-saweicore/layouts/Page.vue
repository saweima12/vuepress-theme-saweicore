<template>
  <main
    class="page"
    :class="{ 'custom' : isCustom }"
  >
    <slot name="top" />
    <!-- main content -->
    <div class="article-wrapper" :class="pageClassesMode">
      <article class="content-wrapper">
        <header class="article-header">
          <ArticleInfo
            v-if="isArticle"
            :categories="categories"
            :date="date"
          />
          <h1 class="title" v-if="$page.title">{{$page.title}}</h1>
        </header>
        <Content class="context"/>
        <footer class="article-footer">
          <router-link
            class="tag"
            v-for="tag in tags"
            :key="tag.text"
            :to="tag.path"
          >
            <div class="tag-block">
              {{ tag.text }}
            </div>
          </router-link>

        </footer>
      </article>
      <!-- Author Field -->
      <section
        class="author-wrapper"
        v-if="isArticle"
      >
        <AuthorInfo />
      </section>
    </div>

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
import { dateFormat } from '@theme/utils'
import { getCategories, getTags } from '@theme/utils/postHandler';



export default {
  components: {
    ArticleInfo,
    AuthorInfo,
    Comment
  },
  computed: {
    pid() {
      return this.$page.pid;
    },
    tags() {
      const { map } = this.$tag;
      return getTags(this.$page, map);
    },
    categories() {
      const { map } = this.$category;
      return getCategories(this.$page, map);
    },
    date() {
      const { date } = this.$page.frontmatter;
      return date ? dateFormat(date) : null;
    },
    pageClassesMode() {
      const { pageOption } = this.$themeConfig;
      const { frontmatter, pid } = this.$page;
      return frontmatter.mode
         || (pid == 'post' ? pageOption.defaultPageMode : 'classic')
         || 'classic'
    },
    isArticle() {
      return this.pid == 'post'
    },
    isCustom() {
      return this.$page.frontmatter.custom === true;
    },
    isDisqusOpen() {
      return this.$page.frontmatter.disqus ||
            (this.$site.themeConfig.comment
            && this.$site.themeConfig.comment.disqus === true
            && this.isArticle)
    },
    isVssueOpen() {
      return this.$page.frontmatter.vssue ||
            (this.$site.themeConfig.comment
            && this.$site.themeConfig.comment.vssue === true
            && this.isArticle)
    },
  },
}
</script>

<style lang="stylus">
@import "../styles/wrapper.styl"

.page
  transition .2s ease

  img
    max-width 100%

  > *:not(.article-wrapper)
    transition .2s ease
    @extend $content-wrapper, $card-box

// PageContent style
.article-wrapper
  box-sizing border-box

  > *
    @extend $content-wrapper

// ArticleTag style
.article-wrapper
  .tag
    display inline-block
    margin-right .4em

    .tag-block
      display block
      padding .5rem
      background var(--bodyBg)
      margin-bottom 1rem
      &:hover
        background var(--customBlockBg)

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
