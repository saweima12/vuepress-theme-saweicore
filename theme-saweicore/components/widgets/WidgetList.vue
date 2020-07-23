<template>
  <div class="widget-list p-relative">
    <transition-group name="fade" tag="div" class="p-relative">
      <AuthorWidget key="author" v-if="view.author" />
      <CategoriesWidget key="category" v-if="view.category"/>
      <TagsWidget key="tag" v-if="view.tag"/>
    </transition-group>
  </div>
</template>

<script>
import AuthorWidget from './AuthorWidget';
import CategoriesWidget from './CategoriesWidget';
import TagsWidget from './TagsWidget';

export default {
  props: {
    view: {
      type: Object,
      default: () => ({
        author: true,
        category: true,
        tag: true
      }),
    }
  },
  components: {
    AuthorWidget,
    CategoriesWidget,
    TagsWidget,
  },
}
</script>

<style lang="stylus">
.widget-list
  .widget
    width 100%
    display inline-block
    box-sizing border-box
    max-height 100vh - 25rem
    padding 1rem
    margin 0 auto .8rem
    @extend $card-box

  .widget-header
    position relative
    margin-bottom .5rem

    .icon
      position absolute
      top 3px
      width 1.6rem
      height 1.6rem

    .title
      vertical-align middle
      font-size 18px
      line-height 1.4em
      padding .2rem 0 .5rem 2rem

  .author-widget
    display none

@media screen and (min-width $mq-md)
  .widget-list
    width 255px
    margin-left .5rem

    .author-widget
      display inline-block

.fade-enter-active, .fade-leave-active
  transition: all .3s;

.fade-leave-to
  opacity 0
  transform translateY(-40px)

.fade-move
  transition transform .3s ease

.fade-leave-active
  position: absolute;
  opacity 0


</style>
