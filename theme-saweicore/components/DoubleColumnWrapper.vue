<template>
  <div class="double-column-wrapper">
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

}
</script>


<style lang="stylus">
.double-column-wrapper
  box-sizing border-box
  display inline-block
  position relative
  padding .5rem 0
  width 100%


@media screen and (min-width $mq-md)
  .double-column-wrapper
    display flex
    padding 1rem .9rem

    .left
      flex 1

    .right
      padding-left .5rem

</style>
