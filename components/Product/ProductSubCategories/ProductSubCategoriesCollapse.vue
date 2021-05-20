<template>
  <div>
    <ArrowCollapse height="125px" :hasMore="items.length > 12">
      <div class="grid grid-cols-3 gap-x-9 sm:flex sm:flex-col sm:gap-0 sm:space-y-2">
        <NuxtLink
          v-for="(item, idx) in items"
          :key="idx"
          to="#"
          class="block mb-3.5 font-bold text-sm overflow-ellipsis whitespace-nowrap overflow-hidden transition-colors hover:text-green hover:underline
                  sm:mb-0 sm:text-xs"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </ArrowCollapse>
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