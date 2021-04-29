<template>
  <div class="catalog-products flex flex-wrap sm:-ml-5.5 sm:-mr-5.5">
    <ProductCard
      v-for="(item, idx) in testItems"
      :key="idx"
      class="catalog-product"
      :item="item"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { items } = toRefs(props)
    const testItems = computed(() => {
      return items.value?.length
        ? items.value
        : [
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
              salePrice: 20
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
              salePrice: 32
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
              salePrice: 18
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42
            },
          
          ]
    })
    return { testItems }
  },
})
</script>

<style lang="postcss">
.catalog-product {
  @apply w-1/4 xl:w-1/3 md:w-1/2;
}
</style>