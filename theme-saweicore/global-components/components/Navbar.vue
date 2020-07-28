<template>
  <header id="theme-navbar" class="navbar blur">
    <MenuButton />

    <router-link
      :to="`/`"
    >
      <img
        class="logo"
        v-if="$site.themeConfig.logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />

      <span
        ref="siteName"
        class="site-name"
        v-if="$siteTitle"
        :class="{ 'show-md': $site.themeConfig.logo }"
      >
        {{ $siteTitle }}
      </span>
    </router-link>

    <div class="links">
      <SearchBox />
      <NavLinks class="show-md"/>
    </div>
  </header>
</template>

<script>
import SearchBox from '@SearchBox';
import NavLinks from '@theme/components/NavLinks';
import MenuButton from '@theme/components/MenuButton';

export default {
  components: {
    MenuButton,
    SearchBox,
    NavLinks
  }
}
</script>

<style lang="stylus">
$navbar-ver-padding = 0.7rem
$navbar-hor-padding = 1.5rem

.navbar
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  height $navbarHeight
  background-color var(--blurBg)
  box-sizing border-box
  box-shadow 0 2px 5px rgba(0,0,0,.06)

.navbar
  padding $navbar-ver-padding 0
  padding-left 4rem
  line-height  $navbarHeight - 1.4rem
  transition transform 0.3s

  a, span, img
    display inline-block
    text-decoration none

  .show-md
    display none

  .logo
    height $navbarHeight - 1.4rem
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top

  .site-name
    font-size 1.25rem
    font-weight 600
    color var(--textColor)
    position relative

  .links
    padding-left 1.5rem
    box-sizing border-box
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-hor-padding
    top $navbar-ver-padding
    display flex
    .search-box
      flex: 0 0 auto
      vertical-align top

.hide-navbar
  .navbar
    transform translateY(-100%)

@media screen and (min-width: $mq-md)
  .navbar
    padding $navbar-ver-padding $navbar-hor-padding

    .show-md
      display inline-block

</style>
