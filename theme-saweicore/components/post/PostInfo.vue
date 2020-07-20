<template>
  <div class="post-info p-relative">
    <div class="author">
      <span class="feather-icon">
        <UserIcon size="1.2x" />
      </span>
      <span class="author-name feather-icon-after">{{ post.author.name }}</span>
    </div>

    <div class="date" v-if="date">
      <span class="feather-icon">
        <CalendarIcon size="1.2x" />
      </span>
      <time class="date feather-icon-after">{{ date }}</time>
    </div>

    <div class="categories" v-if="categories">
      <span class="feather-icon">
        <FolderIcon size="1.2x" />
      </span>

      <span class="links feather-icon-after">
        <span
          class="category"
          v-for="category in categories"
          :key="category.text"
        >
          <router-link
            :to="category.path"
          >
            {{ category.text }}
          </router-link>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { CalendarIcon, UserIcon, FolderIcon } from 'vue-feather-icons'
import { dateFormat } from '@theme/utils'
import { getCategories } from '@theme/utils/postHandler'

export default {
  props: [
    "post"
  ],
  components: {
    CalendarIcon,
    UserIcon,
    FolderIcon
  },
  computed: {
    author() {
      return this.post.author;
    },
    date() {
      const { date } = this.post.frontmatter;
      return date ? dateFormat(date) : null;
    },
    categories() {
      const { map } = this.$category;
      return getCategories(this.post, map);
    },
  },

}
</script>

<style lang="stylus">
.post-info
  display flex
  color #999
  font-size .7rem
  line-height 1.2rem
  padding .5rem 0 .3rem



  a
    color #999


  > *
    position relative
    display inline-block
    line-height 1.4rem
    margin-right 1.2rem


  .categories

    .category
      &:nth-child(even):before
        content '/'
        margin 0 .2rem

      a
        vertical-align middle
        &:hover
          color $accentColor


</style>
