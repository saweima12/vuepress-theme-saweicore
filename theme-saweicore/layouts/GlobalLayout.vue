<template>
  <Frame>
    <transition name="component-fade" mode="out-in">
      <component :is="layout"/>
    </transition>
  </Frame>
</template>

<script>
import Vue from 'vue'
import { setGlobalInfo } from '@app/util'
export default {
  name: 'GlobalLayout',
  computed: {
    layout () {
      const layout = this.getLayout()
      setGlobalInfo('layout', layout)
      return Vue.component(layout)
    }
  },
  methods: {
    getLayout () {
      if (this.$page.path) {
        const layout = this.$page.frontmatter.layout
        if (layout && (this.$vuepress.getLayoutAsyncComponent(layout)
          || this.$vuepress.getVueComponent(layout))) {
          return layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>

<style lang="stylus">

.component-fade-enter-active, .component-fade-leave-active
  transition: all .2s;


.component-fade-enter
  transform translateX(-30px)
  opacity 0

.component-fade-leave-to,
/* .component-fade-leave-active for below version 2.1.8 */
  transform translateX(50px)
  opacity 0


</style>
