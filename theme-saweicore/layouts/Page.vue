<template>
  <main
    class="page"
    :class="[`mode-${pageMode}`]"
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
          <div class="tags-section">
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
          </div>

          <div class="extension-section" v-if="shouldShowExtension">
            <div class="last-updated">
              Last Updated:
              <time :datetime="$page.lastUpdated">
                {{ $page.lastUpdated }}
              </time>
            </div>

          </div>

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
    <Comment v-if="$page.frontmatter.comment !== false"/>

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
    shouldShowExtension() {
      return this.$page.lastUpdated;
    },
    isArticle() {
      return this.pid == 'post'
    },
    pageMode() {
      const { frontmatter } = this.$page;
      // narrow || wide
      return frontmatter.page_mode || 'narrow';
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

  &.mode-wide
    .content-wrapper
      max-width $widePageWidth

  > *:not(.article-wrapper)
    transition .2s ease
    @extend $content-wrapper, $card-box


// PageContent style
.article-wrapper
  box-sizing border-box

  > *
    @extend $content-wrapper





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
