<template>
  <div class="flex flex-wrap">
    <router-link
      v-for="(item, idx) in items"
      :key="idx"
      to="#"
      class="text-sm font-bold hover:text-green hover:underline group transition-colors mr-3.5 mb-3.5 sm:text-xs"
    >
      {{ item.name }}
      <span class="text-grey text-opacity-50 group-hover:text-green">{{ item.cnt }}</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>