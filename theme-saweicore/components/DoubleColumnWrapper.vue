<template>
  <div
    class="double-column-wrapper"
    :class="staticClasses"
  >
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    canReverse() {
      return this.$route.meta.pid == 'category'
        || this.$route.meta.pid == 'tag'
    },
    staticClasses() {
      return {
        'can-reverse' : this.canReverse,
      }
    }
  }

}
</script>


<style lang="stylus">
.double-column-wrapper
  box-sizing border-box
  display flex
  flex-direction column
  position relative
  padding .5rem 0
  width 100%

.can-reverse
  flex-direction column-reverse

@media screen and (min-width $mq-md)
  .double-column-wrapper
    display flex
    flex-direction row
    padding 1rem .9rem

    .left
      flex 0.75
      margin-right .5em

    .right
      flex 0.35
      max-width 225px
      margin 0 auto


@media screen and (min-width $mq-lg)
  .double-column-wrapper

    .right
      max-width 255px
</style>
