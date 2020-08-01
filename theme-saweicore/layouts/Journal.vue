<template>
  <div class="journal-page">
    <div class="content-wrapper">
      <!-- <h1 class="title">{{ $page.title }}</h1> -->
      <ul class="timeline-list">
        <template
          v-for="(post, index) in posts"
        >
          <li
            class="timeline-title"
            v-if="(year = getPostYear(index)) !== getPostYear(index-1)"
            :key="`${index}-${year}`"
          >
            <h2>{{year}}</h2>
          </li>

          <router-link
            class="timeline-item cursor-p"
            tag="li"
            :to="post.path"
            :key="post.key"
          >
            <div class="date-field">
              {{ getPostDateField(post) }}
            </div>
            <div class="content-field">
              {{ post.title }}
            </div>
          </router-link>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import PostListItem from '@theme/components/post/PostListItem';
import moment from 'moment'

export default {
  components: {
    PostListItem,
  },
  computed: {
    posts() {
      return this.$post.pages;
    }
  },
  methods: {
    getPostYear(index) {
      if (index < 0 )
        return "0"

      const { frontmatter } = this.posts[index];
      return new Date(frontmatter.date).getFullYear();
    },
    getPostDateField(post) {
      const { frontmatter } = post;
      return moment(frontmatter.date).format('MM-DD')
    }
  }
}
</script>

<style lang="stylus">

@import "../styles/wrapper.styl"

.journal-page
  > .title
    font-size 28px
    font-weight 600

  .content-wrapper
    max-width 840px
    padding 0 .8rem
    margin 0 auto

  .timeline-list
    .timeline-item:hover
      color var(--mainBg)
      background $accentColor
      padding-left 1.5rem


  .timeline-item
    box-sizing border-box
    color var(--textColor)
    display flex
    max-width calc(100% - .5rem)
    line-height 1.8
    margin .8rem auto
    padding .5rem .8rem
    font-size 16px
    opacity .8
    transition .2s
    @extend $card-box

    @media screen and (min-width $mq-md)
      max-width calc(100% - 2rem)

    .date-field
      margin-right 1rem

    .content-field
      flex 1


  .timeline-title
    padding .5rem
    margin 12px 0 20px
    border-bottom 1px solid var(--borderColor)

</style>
