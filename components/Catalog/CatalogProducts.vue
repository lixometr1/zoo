<template>
  <div class="catalog-products flex flex-wrap sm:-ml-5.5 sm:-mr-5.5">
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
  @apply w-1/4 xl:w-1/3 md:w-1/2;
}
</style>