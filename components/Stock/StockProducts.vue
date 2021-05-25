<template>
  <div>
    <ProductsGrid :title="title" :items="items" />
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
    title: {
      type: String,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>