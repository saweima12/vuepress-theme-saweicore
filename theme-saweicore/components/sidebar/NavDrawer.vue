<template>
  <SideDrawer :direction="direction">
    <div class="author" v-if="author">
      <img class="avatar" :src="author.avatar">
      <div class="author-info">
        <div class="name">
          {{ author.name }}
        </div>
        <div class="summary">
          {{ author.summary }}
        </div>
      </div>
    </div>
    <NavLinks />
    <slot name="top"/>
    <ArchiveLinks />
    <slot name="bottom"/>
  </SideDrawer>
</template>

<script>
import NavLinks from '../NavLinks';
import ArchiveLinks from './ArchiveLinks';
import SideDrawer from './SideDrawer';
import { isEmpty } from '@theme/utils'

export default {
  props: {
    direction: {
      required: true
    }
  },
  components: {
    SideDrawer,
    NavLinks,
    ArchiveLinks,
  },
  data(){
    return {

    }
  },
  computed: {
    author() {
      const { author } = this.$themeConfig
      return !isEmpty(author) ? author : null;
    }
  }
}
</script>

<style lang="stylus" >
.sidebar
  a
    display inline-block

  .nav-links
    display block
    padding 1rem 0
    border-bottom 1px solid var(--borderColor)

    a
      font-weight bold

    .nav-item
      display block
      line-height 1.25rem
      font-size 1.1rem
      padding 0.5rem 0 0.5rem 1.5rem

  .author
    display flex
    border-bottom 1px solid var(--borderColor)

    .avatar
      display inline-block
      width 60px
      height 60px
      border-radius 6px
      margin .8rem 1rem

    .author-info
      display inline-block
      padding .6rem 0

      .name
        margin .4rem 0
        font-size 1.1rem
        font-weight bold

@media screen and (min-width: $mq-md)
  .no-sidebar
    .sidebar
      display none

  .sidebar
    .nav-links
      display none
    .author
      display none

</style>
