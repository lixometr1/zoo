<template>
  <div class="product-grouped-item">
    <div class="flex-1 min-w-0">
      <ProductCard
        :item="{}"
        :hoverCollapse="false"
        :showBtn="false"
        :showReviews="false"
        class="product-card"
        :multilineTitle="multilineTitle"
      />
    </div>
    <div class="product-grouped-item__circle">
      <svgPlus width="15" class="opacity-50 text-grey" />
    </div>
    <div class="flex-1 min-w-0">
      <ProductCard
        :item="{}"
        :hoverCollapse="false"
        :showBtn="false"
        :showReviews="false"
      />
    </div>
    <div class="product-grouped-item__circle">
      <svgPlus width="15" class="opacity-50 text-grey" />
    </div>
    <div class="flex-1 min-w-0">
      <ProductCard
        :item="{}"
        :hoverCollapse="false"
        :showBtn="false"
        :showReviews="false"
      />
    </div>
    <div class="product-grouped-item__circle !mx-5 md:!mx-auto">
      <svgEquals width="15" class="opacity-50 text-grey" />
    </div>
    <div class="flex-1 product-grouped-item-price__wrapper">
      <div class="product-grouped-item-price mb-3">
        <div class="flex items-center md:mb-2 sm:mb-0 sm:flex-col">
          <div class="product-grouped-item-price__old">{{ oldPrice }}</div>
          <div class="product-grouped-item-price__sale">
            {{ $t('economy') }} {{ sale }} {{ currency }}!
          </div>
        </div>
        <div class="mt-auto">
          <span class="product-grouped-item-price__price"> {{ price }}</span>
          <span class="product-grouped-item-price__currency">
            {{ currency }}
          </span>
        </div>
      </div>
      <button
        class="btn-green w-full md:text-base sm:text-sm"
        type="button"
        @click="addToCard"
      >
        {{ $t('toCart') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgPlus from '@/assets/icons/plus.svg?inline'
import svgEquals from '@/assets/icons/equals.svg?inline'
import CurrencyModule from '@/store/currency'
import useResizeValue from '~/utils/compositions/useResizeValue'
import { Breakpoints } from '~/types/constants'
export default defineComponent({
  components: { svgPlus, svgEquals },

  setup() {
    const addToCard = () => {}
    const currency = computed(() => {
      return CurrencyModule.currency
    })
    const { value: multilineTitle } = useResizeValue((wWidth) => {
      if (wWidth < Breakpoints.md) {
        return true
      }
      return false
    })
    const price = computed(() => 3.787)
    const oldPrice = computed(() => 3.276)
    const sale = computed(() => 572)
    return { addToCard, currency, multilineTitle, price, oldPrice, sale }
  },
})
</script>

<style lang="postcss">
.product-grouped-item {
  @apply flex-y-center md:flex-col md:items-stretch;
  .product-card {
    @apply md:flex md:flex-row;
  }
  &__circle {
    @apply rounded-full bg-white w-12 h-12 flex-center mx-2.5 flex-shrink-0
            lg:-mx-3
          md:mx-auto md:-my-5 relative z-20
           sm:w-9 sm:h-9 sm:-my-3;
    box-shadow: 0px 4px 25px rgba(69, 80, 103, 0.2);
    svg {
      @apply sm:w-3;
    }
  }
  &-price {
    &__wrapper {
      @apply md:bg-white md:rounded-lg md:border md:border-grey-light 
            md:px-4.5 md:py-9
            sm:px-4.5 sm:py-5.5;
    }
    @apply flex flex-col md:text-center md:items-center;
    &__old {
      @apply relative text-2lg text-opacity-50 text-grey whitespace-nowrap sm:order-2 sm:text-sm;
      &::before {
        content: '';
        @apply absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 rotate-[-15deg] 
      bg-green opacity-60 w-full px-0.5 box-content h-[2px];
      }
    }
    &__sale {
      @apply bg-yellow font-bold text-sm px-2 py-1 ml-2 rounded-md leading-none 
            sm:text-xs sm:py-0.5 sm:mb-2;
    }
    &__price {
      @apply text-3xl font-normal sm:text-2lg whitespace-nowrap;
    }
    &__currency {
      @apply text-grey text-opacity-50 text-2lg;
    }
  }
}
</style>