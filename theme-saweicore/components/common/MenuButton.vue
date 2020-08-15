<template>
  <div class="sidebar-button" @click="eventBus.$emit('toggle-sidebar')">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512">
      <path fill="currentColor" d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" class=""></path>
    </svg>
  </div>
</template>

<script>
import EventBus from '@theme/utils/eventbus';

export default {
  computed: {
    eventBus() {
      return EventBus;
    }
  }
}
</script>

<style lang="stylus">
.sidebar-button
  cursor pointer
  display block
  width 1.25rem
  height 1.25rem
  position absolute
  padding 0.6rem
  top 0.6rem
  left 1rem

  .icon
    display block
    width 100%
    height 100%

  @media screen and (min-width: $mq-md)
    display none

@media screen and (min-width: $mq-md)
  .sidebar-button
    width 40px
    height 40px
    display inline-block
    position absolute
    left 1rem
    top ($navbarHeight + .3rem)
    padding 0
    text-align center
    color #cdcdcd
    line-height 44px
    border-radius 50%
    transition .2s ease

    &:hover
      background $accentColor

    .icon
      display inline
      width 1rem
      height 1rem

@media screen and (min-width $mq-lg)
  .sidebar-button
    top ($navbarHeight + 1.2rem)


@media screen and (min-width $mq-md)
  .no-sidebar
    .sidebar-button
      display none

  .sidebar-open
    .sidebar-button
      left $sidebarWidth + 1rem

</style>
