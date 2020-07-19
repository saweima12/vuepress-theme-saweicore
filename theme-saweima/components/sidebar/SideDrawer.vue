<template>
  <aside class="sidebar"
    :class="direction == 'left' ? 'left' : 'right'">
    <slot />
  </aside>
</template>

<script>
export default {
  props: {
    direction: {
      required: true
    }
  }
}
</script>

<style lang="stylus">
.sidebar
  background-color var(--mainBg)
  font-size 16px
  width $sidebarWidth*0.9
  position fixed
  margin 0
  top $navbarHeight
  bottom 0
  z-index 15
  box-sizing border-box

  overflow-y auto
  transition transform .2s

  &.left
    left 0
    border-right 1px solid var(--borderColor)
    transform translateX(-100%)

  &.right
    right 0
    border-left 1px solid var(--borderColor)
    transform translateX(100%)

  @media screen and (min-width: $mq-md)
    width $sidebarWidth

  @media screen and (min-width: $mq-lg)
    background var(--sidebarBg)

// If sidebar open
.sidebar-open
  .sidebar
    &.left, &.right
      z-index 15
      transform translateX(0%)

  @media screen and (min-width: $mq-md)
    .content
      padding-left $sidebarWidth + 1.8rem


</style>
