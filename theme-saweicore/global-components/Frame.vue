<template>
  <div
    id="theme-container"
    :class="stateClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <!-- 頂部 -->
    <Navbar />

    <!-- Left SideDrawer -->
    <NavDrawer
      direction="left"
      v-show="showSidebar"
    />

    <BodyBg v-if="$themeConfig.bodyBgImg" />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"/>


    <!-- All Context -->
    <div id="theme-content" class="theme-content">
      <slot />
    </div>

    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BodyBg from '@theme/components/BodyBg'
import NavDrawer from '@theme/components/sidebar/NavDrawer'
import EventBus from '@theme/utils/eventbus'
import { getLength, isEmpty } from '@theme/utils'

const MOBILE_DESKTOP_BREAKPOINT = 959 // refer to config.styl

export default {

  components: {
    Navbar,
    Footer,
    NavDrawer
  },
  data(){
    return {
      hideNavbar: false,
      isSidebarOpen: false,
      showSidebar: true,
      themeModeg: 'light'
    }
  },
  computed: {
    shouldShowSidebar() {
      const { frontmatter, headers } = this.$page;
      const { map } = this.$archive;
      return ( frontmatter.sidebar !== false
              && frontmatter.archive
              && frontmatter.archive.id in map)
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false
      ) {
          return false
      }
      return (this.$title || themeConfig.logo || themeConfig.nav )
    },
    stateClasses() {
      return {
        'no-navbar': !this.shouldShowNavbar,
        'no-sidebar': !this.shouldShowSidebar,
        'auto-hide-navbar': false,
        'sidebar-open': this.isSidebarOpen,
      }
    }
  },
  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    checkSidebarOpenOfclientWidth() {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.isSidebarOpen = false
      }
    },
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },
    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  },
  watch: {
    isSidebarOpen() {
      if(this.isSidebarOpen) this.hideNavbar = false;
    }
  },
  created() {
    EventBus.$on('toggle-sidebar', this.toggleSidebar);
  },
  mounted() {
    // listen toggle-sidebar event.
    this.checkSidebarOpenOfclientWidth();
    // debug message
    console.log("obj",this);
    console.log("route",this.$route)
    console.log("page", this.$page)
    // console.log("pagination", this.$pagination)
    console.log(this.stateClasses);

    this.$router.afterEach(() => {
      this.checkSidebarOpenOfclientWidth();
    })
  },
  destroyed() {
    EventBus.$off('toggle-sidebar');
  }

}
</script>

<style lang="stylus">
.theme-content
  padding-top $navbarHeight


.sidebar-open
  .sidebar-mask
    display block

.sidebar-mask
  position fixed
  display none
  z-index 12
  top 0
  width 100vw
  height 100vh

@media screen and (min-width: $mq-lg)
  .sidebar-mask
    display none

  .sidebar-open
    .sidebar-mask
      display none

</style>
