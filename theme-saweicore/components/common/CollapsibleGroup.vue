<template>
  <div class="collapsible-group">
    <header
      class="collapsible-title"
      @click="eventCode ? eventBus.$emit(eventCode, item) : {}"
    >

      <template v-if="!$slots.title" >
        <span
          class="title"
          v-if="!$slots.title"
        >
          {{ item.title }}
        </span>
      </template>

      <slot v-else name="title"/>


      <span
        class="archive-arrow"
        :class="isOpen ? `down` : `right`"
        v-show="eventCode"
      />
    </header>

    <transition name="collaps" >
      <div
        class="list-container"
        v-show="isOpen"
      >
        <ul
          class="item-list"
        >
          <slot />
        </ul>
      </div>
    </transition>

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
      required: false,
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
    onToggleCollapsibleGroup(item) {
      const result = (item == this.item) && !this.isOpen;
      this.toggleSelf(result)
    }
  },
  created() {
    if(!this.eventCode)
      return;
    EventBus.$on(this.eventCode, this.onToggleCollapsibleGroup);
  },
  mounted() {
    if (this.defaultStatus) {
      this.toggleSelf(true);
    }
  },
  destroyed() {
    if(!this.eventCode)
      return;
    EventBus.$off(this.eventCode);
  }
}
</script>

<style lang="stylus">
.collapsible-group
  .collapsible-title
    cursor pointer


</style>
