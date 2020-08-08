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
const msgs = [
  '看來這個網址有問題...?',
  '喔不...出現了些問題....',
  '什麼都沒找到、什麼都沒看到。',
  '滅びのバーストストリーム',
]

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)]
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
