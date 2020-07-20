<template>
  <div class="article-info">
    <!-- Categories Field -->
    <div class="categories p-relative" v-if="categories">
      <div class="feather-icon">
        <FolderIcon size="1.1x" />
      </div>
      <div class="links">
        <div class="category" v-for="category in categories" :key="category.key">
          <router-link :to="category.path">
            {{ category.text }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- datetime field -->
    <div class="date-field p-relative" v-if="date">
      <div class="feather-icon">
        <CalendarIcon size="1.1x" />
      </div>
      <time class="date">{{date}}</time>
    </div>

  </div>
</template>

<script>
import { FolderIcon, CalendarIcon } from 'vue-feather-icons';
import { dateFormat } from '@theme/utils'
import { getCategories } from '@theme/utils/postHandler';

export default {
  components: {
    CalendarIcon,
    FolderIcon,
  },
  computed: {
    categories() {
      const { map } = this.$category;
      return getCategories(this.$page, map);
    },
    date() {
      const { date } = this.$page.frontmatter;
      return date ? dateFormat(date) : null;
    }
  }
}
</script>

<style lang="stylus">
.article-info
  display flex
  position relative
  padding 1rem 0
  color #999
  font-size .8rem

  a
    color #999
    &:hover
      color $accentColor

  .icon
    display inline-block
    position absolute

  .categories
    flex 1

    .links
      padding-left 1.2rem
      height 1rem
      line-height 1.2rem

      .category
        display inline-block
        vertical-align middle

        &:hover
          color $accentColor

        &:nth-child(even):before
          content '/'
          margin 0 .2rem


  .date-field
    display inline-block
    text-align right

    .date
      display inline-block
      padding-left 1.2rem
      line-height 1.4rem

</style>
