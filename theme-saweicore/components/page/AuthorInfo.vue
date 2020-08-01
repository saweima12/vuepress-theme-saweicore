<template>
  <div class="author-info">
    <!-- mobile -->
    <div class="mobile">
      <div class="header">
        <div class="avatar">
          <img :src="author.avatar">
        </div>
        <div class="name">
          {{ author.name }}
        </div>
      </div>

      <div class="desc">
        {{ author.desc }}
      </div>
    </div>
    <!-- 576px up -->
    <div class="tablet">
      <div class="avatar">
          <img :src="author.avatar">
        </div>
        <div class="info">
          <div class="name">
            {{ author.name }}
          </div>
          <div class="desc">
            {{ author.desc }}
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    author() {
      return this.$page.author;
    }
  }
}
</script>

<style lang="stylus">
.author-info
  padding .5rem 0

  .name
    font-size 1.2rem
    font-weight bold

  .mobile

    .header
      display flex
      align-items center
      margin-bottom .5rem

    .avatar
      max-width 50px
      border 1px solid var(--borderColor)
      border-radius 50%
      overflow hidden
      margin-right 1em

  .tablet
    display none
    align-items center

    .info
      padding-left 1rem

    .avatar
        display inline-block
        max-width 135px

    .desc
      padding .5rem 0

  @media screen and (min-width $mq-sm)
    .mobile
      display none

    .tablet
      display flex





</style>
