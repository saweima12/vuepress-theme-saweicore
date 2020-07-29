<template>
  <div class="body-bg"
    :style="{
        background: `url(${bodyBgImg}) center center / cover no-repeat`
      }">
  </div>
</template>

<script>
export default {
  computed: {
    bodyBgImg() {
      return this.$themeConfig.bodyBgImg;
    }
  }
}
</script>

<style lang="stylus">
.body-bg
  position fixed
  top 0
  left 0
  width 100vw
  height 100vh
  transition all .3s

</style>
