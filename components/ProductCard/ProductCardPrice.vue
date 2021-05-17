<template>
  <ProductPrice class="product-card-price" v-bind="$props" :showPiece="false" />
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  props: {
    price: [Number, String],
    oldPrice: [Number, String],
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
  &.product-price {
    @apply sm:h-12 !h-16;
  }
  .product-price {
    &__price {
      @apply text-2lg sm:text-lg;
    }
    &__currency {
      @apply text-base sm:text-sm;
    }
    &__old {
      @apply sm:text-xs;
    }
  }
}
</style>