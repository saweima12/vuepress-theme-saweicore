<template>
  <div class="fof-page">
    <div class="content-wrapper">
      <h1 class="title">404 NotFound</h1>
      <h2 class="msg">{{ getMsg() }}</h2>
      <router-link
        class="tips"
        :to='`/`'
      >
        <span>※ Go Back Home</span>
      </router-link>
    </div>
  </div>
</template>

<script>


export default {
  computed: {
    fofMsg() {
      return this.$themeConfig.fofTips || msgs
    },
  },
  methods: {
    getMsg() {
      return this.fofMsg[Math.floor(Math.random() * this.fofMsg.length)]
    }
  }
}
</script>


<style lang="stylus">
@import "../styles/wrapper.styl"

.fof-page
  display flex
  align-items center
  height 60vh
  .content-wrapper
    max-width 100%
    height 50%
    margin-top 5rem
    @extend $content-wrapper

    .title
     font-size 42px

    .msg
      font-size 24px
      font-weight 400

    .tips
      display block
      margin-top 1rem
      color var(--textColor)
      opacity .8

      &:hover
        color $accentColor

      span
        text-align right


</style>
