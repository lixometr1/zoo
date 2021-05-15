<template>
  <div class="product-price">
    <div v-if="oldPrice" class="flex items-center">
      <div class="product-price__old">
        {{ oldPrice }}
      </div>
      <div v-if="sale" class="product-price__sale">-{{ sale }}%</div>
    </div>
    <div class="mt-auto">
      <span class="product-price__price"> {{ price }}</span>
      <span class="product-price__currency">
        {{ currency }}<template v-if="showPiece">/{{ $t('itemPiece') }}.</template>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  props: {
    price: [Number, String],
    oldPrice: [Number, String],
    sale: Number,
    showPiece: Boolean
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
.product-price {
  @apply flex flex-col sm:h-12 h-18;
  .product-card.size-sm & {
    @apply h-14;
  }
  &__old {
    @apply relative  text-opacity-50 text-grey;
    &::before {
      content: '';
      @apply absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-[-15deg] 
      bg-green opacity-60 w-full px-0.5 box-content h-[2px];
    }
  }
  &__sale {
    @apply bg-yellow font-bold text-sm px-2 py-1.5 ml-2 rounded-md leading-none sm:text-xs sm:py-0.5;
  }
  &__price {
    @apply text-3xl sm:text-lg;
  }
  &__currency {
    @apply text-grey text-opacity-50 text-lg;
  }
}
</style>