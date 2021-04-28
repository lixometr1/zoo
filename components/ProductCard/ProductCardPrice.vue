<template>
  <div class="h-16 product-card-price flex flex-col">
    <div v-if="oldPrice" class="flex items-center">
      <div
        class="product-card-price__old text-opacity-50 text-grey product-card-old-price"
      >
        {{ oldPrice }}
      </div>
      <div
        v-if="sale"
        class="bg-yellow font-bold text-sm px-2 py-1.5 ml-2 rounded-md leading-none"
      >
        -{{ sale }}%
      </div>
    </div>
    <div class="mt-auto">
      <span class="text-2lg sm:text-lg"> {{ price }}</span> <span class="text-grey text-opacity-50">{{ currency }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  props: {
    price: Number,
    oldPrice: Number,
    sale: Number,
  },
  setup() {
    const currency = computed(() => CurrencyModule.currency)
    return {
      currency,
    }
  },
})
</script>

<style lang="postcss">
.product-card-price {
  .product-card.size-sm & {
    @apply h-14;
  }
  .product-card-old-price {
    @apply relative;
    &::before {
      content: '';
      @apply absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-[-15deg] 
      bg-green opacity-60 w-full px-0.5 box-content h-[2px];
    }
  }
}
</style>