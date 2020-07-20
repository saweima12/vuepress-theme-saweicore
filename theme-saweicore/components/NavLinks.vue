<template>
  <nav
    class="nav-links"
  >
    <!-- Custom NavLink -->
    <div
      class="nav-item"
      v-for="item in nav"
      :key="item.link"
    >
      <NavLink :item="item" />
    </div>
  </nav>
</template>

<script>
import NavLink from '@theme/components/NavLink';

export default {
  components: {
    NavLink
  },
  computed: {
    nav() {
      return this.$site.themeConfig.nav || this.$themeConfig.nav || []
    }
  },
}
</script>

<style lang="stylus">
// Navlinks on navbar
.nav-links
  a
    line-height 1.4rem
    color inherit
    transition .1s ease

    &:hover, &.router-link-exact-active
      color $accentColor


.navbar
  .nav-links
    display inline-block

    a
      font-weight bold
      &.router-link-exact-active
        border-bottom 2px solid #bbb

    .nav-item
      position relative
      display inline-block
      margin-left .5em
      line-height 2rem

      &:first-child
        margin-left 0

  @media screen and (min-width $mq-md)
    .nav-links
      .nav-item
        margin-left 1em
        line-height 2rem
        &:first-child
          margin-left 0

  @media screen and (min-width $mq-lg)
    .nav-links
      .nav-item
        margin-left 1.5rem
</style>
