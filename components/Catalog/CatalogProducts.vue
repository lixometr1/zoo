<template>
  <div class="catalog-products flex flex-wrap">
    <ProductCard class="catalog-product" v-for="(item, idx) in 10" :key="idx" /> 
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
.catalog-product {
  @apply w-1/4 xl:w-1/3 lg:w-1/2;
}
</style>