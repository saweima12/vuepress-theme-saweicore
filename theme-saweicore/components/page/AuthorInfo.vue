<template>
  <div class="author-info">
    <div class="avatar">
      <img :src="author.avatar">
    </div>
    <div class="info">
      <div class="name">
        {{ author.name }}
      </div>
      <div class="desc">
        {{ author.desc }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    author() {
      return this.$page.author;
    }
  }
}
</script>

<style lang="stylus">
.author-info
  display flex
  padding .5rem 0

  .avatar
    display inline-block
    width 15rem

  .info
    padding-left 1rem

    .name
      font-size 1.2rem
      font-weight bold

    .desc
      padding .5rem 0

</style>
