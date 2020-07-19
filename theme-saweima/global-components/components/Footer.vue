<template>
  <div id="theme-footer" class="footer">
    <span class="info">
      Theme by <a href="https://www.plurk.com/tassis">Saweima</a> |
      Copyright © 2020 |
      reference from <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank" title="Vdoing">Vdoing</a>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.footer
  padding 5rem 1.5rem 2.5rem
  text-align center
  box-sizing border-box
  font-size .85rem
  transition all .2s ease

  .info
    letter-spacing 1px

@media screen and (min-width: $mq-lg)
  .sidebar-open:not(.no-sidebar)
    .footer
      padding-left $sidebarWidth


</style>
