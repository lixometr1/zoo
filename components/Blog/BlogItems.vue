<template>
  <div class="grid grid-cols-2 grid-flow-row gap-3.5 gap-y-9 xs:grid-cols-1 sm:gap-y-8">
    <div v-for="(item, i) in items" :key="i" class="">
      <BlogCard />
    </div>
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