<template>
  <div class="catalog-products flex flex-wrap sm:-ml-5.5 sm:-mr-5.5">
    <div v-for="(item, idx) in testItems" :key="idx" class="catalog-product">
      <ProductCard :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import { plainToClass } from 'class-transformer'
import { ProductEntity } from '~/utils/models/product.entity'

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
            plainToClass(ProductEntity, {
              name: 'Royal Canin Maxi Adult - 1 asd asd',
              product_item: [
                {
                  title: 'Hey',
                  price: 42,
                  sale_price: 20,
                },
              ],
            }),
            {
              name: 'Royal Canin Maxi Adult - 1 ad',
              price: 42,
              salePrice: 32,
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
              salePrice: 18,
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
            },
            {
              name: 'Royal Canin Maxi Adult - 1...',
              price: 42,
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