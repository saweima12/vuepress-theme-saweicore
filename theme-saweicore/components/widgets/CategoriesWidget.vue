<template>
  <div class="categories-widget widget card-box">
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
      const sliceNum = this.$themeConfig.categoriesWidget || 10
      const sortCategory = this.$category.list.sort((a, b) => a.length > b.length ? -1 : 1);
      return sortCategory.slice(0, 10);
    }
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

</style>
