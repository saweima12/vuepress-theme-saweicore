<template>
  <router-link
    v-if="!isExternal(path)"
    :exact="exact"
    :to="path"
    @focus.native="focusoutAct"
  >
    {{ item.text }}
  </router-link>
  <a v-else
    :href="path"
    :target="'_blank'"
    @focus="focusoutAct"
  >
    {{ item.text }}
    <OutboundLink/>
  </a>
</template>

<script>
import { isExternal } from '@theme/utils';

export default {
  props: {
    item : { required: true}
  },
  computed: {
    path() {
      return this.item.path;
    },
    exact() {
      return this.$route.path == this.item.path;
    }
  },
  methods: {
    isExternal,
    focusoutAct() {
      this.$emit("focusout");
    }
  },
}
</script>
