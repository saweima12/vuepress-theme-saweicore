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
        :href="$themeConfig.author.socials.plurk.link"
        v-if="$themeConfig.author.socials.plurk"
        target="_blank"
      >
        <div class="social plurk">
            <PlurkIcon />
        </div>
      </a>
      <a
        :href="$themeConfig.author.socials.github.link"
        v-if="$themeConfig.author.socials.github"
        target="_blank"
      >
        <div class="social github">
          <GithubIcon />
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import PlurkIcon from '@theme/components/icons/PlurkIcon';
import GithubIcon from '@theme/components/icons/GithubIcon';

export default {
  components: {
    GithubIcon,
    PlurkIcon
  },
  computed: {
    author() {
      const { author } = this.$themeConfig;
      return author;
    }
  }
}
</script>

<style lang="stylus">
.author-widget

  .avatar
    width 80%
    border 1px solid #aaa
    margin 0 auto

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
    padding .2rem 0 0

  .social
    color #666
    cursor pointer
    display inline-block
    width 25px
    transition .2s ease
    margin 0 1rem


.social.plurk:hover
  color #FF9975

.social.github:hover
  color #000

</style>
