<template>
  <div class="author-widget widget">
    <div class="avatar">
      <img :src="author.avatar" alt="">
    </div>

    <div class="author-info">
      <div class="name">{{ author.name }}</div>
      <div class="summary">{{ author.summary }}</div>
    </div>

    <div class="socials">
      <a
        v-for="(social, index) in $themeConfig.author.socials"
        :key="index"
        :href="social.link"
        target="_blank"
      >
        <div class="social" :class="social.text">
          <IconSticker :iconComponent="social.component"/>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import IconSticker from '@theme/components/common/IconSticker';

export default {
  components: {
    IconSticker,
  },
  computed: {
    author() {
      const { author } = this.$themeConfig;
      return author;
    },
  }
}
</script>

<style lang="stylus">
.author-widget
  .avatar
    box-sizing border-box
    margin 0 auto
    width 180px
    height 180px
    padding-bottom 26.66%
    img
      border-radius 5px
      border 1px solid #aaa

  .author-info
    display block
    padding .5rem 0 .5rem
    text-align center

    .name
      width 100%
      line-height 1.3rem !important
      font-size 1.3rem
      font-weight 600

    .summary
      font-size 1rem

  .socials
    background var(--mainBg)
    display flex
    justify-content center
    margin-top .5rem
    border-top 1px solid #eee

    a
      padding .5rem 0
      width 100%
      text-align center
      transition .5s


    a:not(:last-child)
      border-right 1px solid var(--borderColor)


    .social
      color #666
      cursor pointer
      display inline-block
      width 25px
      transition .2s ease
      margin 0 1rem


.author-widget
  .socials
    a:hover
      background var(--bodyBg)

      .social.plurk
        color #FF9975

      .social.github
        color #000

</style>
