<template>
  <main class="index-post-page">
    <div class="banner-wrapper" v-if="shouldShowBanner">
      <Banner />
    </div>
    <div class="main-wrapper">
      <DoubleColumnWrapper>
        <template v-slot:left>
          <PostList />
        </template>

        <template v-slot:right>
          <WidgetList :view="widgetView"/>
        </template>
      </DoubleColumnWrapper>
    </div>
  </main>
</template>

<script>
import DoubleColumnWrapper from '@theme/components/DoubleColumnWrapper'
import PostList from '@theme/components/post/PostList'
import WidgetList from '@theme/components/widgets/WidgetList'
import Banner from '@theme/components/Banner';

export default {
  components: {
    DoubleColumnWrapper,
    PostList,
    WidgetList,
    Banner
  },
  computed: {
    shouldShowAuthorWidget() {
      return this.$route.meta.pid == 'post';
    },
    shouldShowCategoriesWidget() {
      return ['post', 'category'].indexOf(this.$route.meta.pid) > -1;
    },
    shouldShowTagsWidget() {
      return ['post', 'tag'].indexOf(this.$route.meta.pid) > -1;
    },
    shouldShowBanner() {
      return this.$themeConfig.banner && this.$route.meta.pid == 'post';
    },
    widgetView() {
      return {
        author: this.shouldShowAuthorWidget,
        category: this.shouldShowCategoriesWidget,
        tag: this.shouldShowTagsWidget
      }
    }
  },
}
</script>

<style lang="stylus">
@import "../styles/wrapper.styl"

.index-post-page
  .banner-wrapper
    width 100%

    .banner

      background #000
      min-height 450px

  .main-wrapper
    transition .2s
    max-width $indexPageWidth

    @media screen and (min-width $mq-sm)
      margin 0 .5rem

    @media screen and (min-width $mq-lg)
      margin .5rem auto

</style>
