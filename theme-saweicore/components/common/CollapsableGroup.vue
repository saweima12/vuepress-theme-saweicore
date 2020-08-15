<template>
  <div class="collapsable-group">
    <h1
      class="collapsable-title"
      @click="eventBus.$emit(eventCode, item)"
    >
      <span class="title">
        {{ item.title }}
      </span>

      <span
        class="archive-arrow"
        :class="isOpen ? `down` : `right`"
      />
    </h1>

    <ul
      class="item-list"
      v-show="isOpen"
    >
      <slot />
    </ul>
  </div>
</template>

<script>
import EventBus from '@theme/utils/eventbus';
export default {
  props: {
    item: {
      required: true,
    },
    eventCode: {
      required: true,
    },
    defaultStatus: {
      default: false,
    }
  },
  computed: {
    eventBus() {
      return EventBus;
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleSelf(to) {
      this.isOpen = typeof to === 'boolean' ? to : !this.isOpen;
    },
    onToggleCollapsableGroup(item) {
      const result = (item == this.item) && !this.isOpen;
      this.toggleSelf(result)
    }
  },
  created() {
    EventBus.$on(this.eventCode, this.onToggleCollapsableGroup);
  },
  mounted() {
    if (this.defaultStatus) {
      this.toggleSelf(true);
    }
  },
  destroyed() {
    EventBus.$off(this.eventCode);
  }
}
</script>

<style lang="stylus">
.collapsable-group
  .title
    cursor pointer
</style>
