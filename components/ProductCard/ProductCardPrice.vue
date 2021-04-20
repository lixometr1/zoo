<template>
  <div class="h-16 product-card-price flex flex-col">
    <div v-if="oldPrice" class="flex items-center">
      <div class="product-card-price__old text-opacity-50 text-grey">
        {{ oldPrice }}
      </div>
      <div
        class="bg-yellow font-bold text-sm px-2 py-1.5 ml-2 rounded-md leading-none"
        v-if="sale"
      >
        -{{ sale }}%
      </div>
    </div>
    <div class="mt-auto">
      <span class="text-2lg"> {{ price }}</span> <span>{{ currency }}</span>
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
</style>