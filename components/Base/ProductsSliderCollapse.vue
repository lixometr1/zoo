<template>
  <div>
    <TitleWithAll
      class="!hidden md:!flex sm:justify-between mb-9 md:mb-5"
      :link="link"
      :title="title"
      :showAll="showAll"
    />
    <ProductsSlider
      class="md:hidden"
      :title="title"
      :link="link"
      :showAll="showAll"
      :items="items"
    />
    <ProductsCollapse :items="items" class="hidden md:block" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { plainToClass } from 'class-transformer'
import { ProductEntity } from '~/utils/models/product.entity'

export default defineComponent({
  props: {
    title: String,
    link: String,
    showAll: {
      type: Boolean,
      default: true
    },

    productOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const items = computed(() => {
      const products = [
        {
          product_item: [
            {
              top_sale_label: 1,
              popular_label: 1,
            },
          ],
        },
        {},
        {
          product_item: [
            {
              popular_label: 1,
              price: 100,
              sale_price: 50,
            },
          ],
        },
        {},
        {},
        {},
      ]
      return products.map((product) => {
        return plainToClass(ProductEntity, product)
      })
    })
    return { items }
  },
  computed: {},
})
</script>

<style lang="postcss">
</style>