<template>
  <div class="categories-widget widget">
    <div class="widget-header p-relative">
      <div class="icon">
        <FolderIcon/>
      </div>
      <h3 class="title">Categories</h3>
    </div>
    <div class="categories">
      <router-link
        class="category"
        v-for="category in categories"
        :key="category.name"
        :to="category.path"
      >
        <div class="name">
          {{ category.name }}
        </div>
        <div class="amount">
          {{ category.pages.length }}
        </div>
      </router-link>
    </div>
    <div class="more-link" v-if="shouldShowMoreLink">
      <router-link
        :to="`/categories/`"
      >
        More...
      </router-link>
    </div>
  </div>
</template>

<script>

import FolderIcon from '@theme/components/icons/FolderIcon'

export default {
  components: {
    FolderIcon
  },
  computed: {
    categories() {
      const sortCategory = this.$category.list.sort((a, b) => a.length > b.length ? -1 : 1);
      return sortCategory.slice(0, this.sliceNum);
    },
    sliceNum() {
      const { blogOption } = this.$themeConfig;
      return blogOption && blogOption.categoryWidgetLength || 10;
    },
    shouldShowMoreLink() {
      return this.$route.meta.pid !== 'category' && this.$category.length > this.sliceNum;
    },
  }
}
</script>

<style lang="stylus">
@import "../../styles/widget.styl"

.categories-widget
  .categories
    @extend $rule-widget

    .category
      .name
        @extend $rule-widget-name
      .amount
        @extend $rule-widget-amount
  .more-link
    @extend $widget-more-link

</style>
