<template>
  <div class="flex flex-wrap">
    <ProductCard v-for="(item, idx) in 10" :key="idx" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>