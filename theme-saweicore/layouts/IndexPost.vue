<template>
  <main class="index-post-page">
    <div class="main-wrapper">
      <DoubleColumnWrapper>

        <template v-slot:left>
          <PostList />
          <div class="list-pagination">
            <Pagination />
          </div>
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
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    DoubleColumnWrapper,
    PostList,
    WidgetList,
    Pagination,

  },
  computed: {
    shouldShowAuthorWidget() {
      return this.$route.meta.pid == 'post';
    },
    shouldShowCategoriesWidget() {
      return ['post', 'category'].indexOf(this.$route.meta.pid) > -1
    },
    shouldShowTagsWidget() {
      return ['post', 'tag'].indexOf(this.$route.meta.pid) > -1
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
  .main-wrapper
    @extend $index-wrapper

.list-pagination
  width 100%

  .pagination
    width 100%
    text-align center

    > li
      display inline-block

@media screen and (min-width $mq-md)
  .list-pagination
    .pagination
      text-align left

</style>
