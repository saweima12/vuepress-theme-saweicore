<script>
export default {
  props: {
    iconComponent: {
      required: true,
    }
  },
  render: function(h){
    return h(this.iconComponent)
  }
}
</script>
