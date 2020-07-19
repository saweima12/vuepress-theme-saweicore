<template>
  <div class="collapsable-group">
    <h1
      class="title"
      @click="eventBus.$emit('toggle-archive-group', item)"
    >
      {{ item.title }}
      <span
        class="archive-arrow"
        :class="isOpen ? `down` : `right`"
      />
    </h1>

    <ul
      class="item-list"
      v-show="isOpen"
    >
      <li
        class="item-link"
        v-for="(section, section_key) in item.sections.map"
        :key="section_key"
      >
        <router-link
          :to="section.page.path"
        >
          {{ section.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import EventBus from '@theme/utils/eventbus';
export default {
  props: {
    item: {
      required: true
    },
    collapsable: {
      required: false,
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
    onToggleArchiveGroup(item) {
      const result = (item == this.item) && !this.isOpen;
      this.toggleSelf(result)
    }
  },
  created() {
    EventBus.$on('toggle-archive-group', this.onToggleArchiveGroup);

  },
  mounted() {
    if (this.$page.key in this.item.sections.map) {
      this.toggleSelf(true);
    }
  },
  destroyed() {
    EventBus.$off('toggle-archive-group');
  }
}
</script>

<style lang="stylus">
.collapsable-group
  .title
    cursor pointer
</style>
