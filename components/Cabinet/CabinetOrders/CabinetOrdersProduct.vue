<template>
  <div class="flex-y-center min-w-[400px] sm:min-w-0 sm:border-b border-grey-500 border-opacity-50 pb-2">
    <div class="w-8/12 flex-y-center sm:flex-1 sm:w-auto min-w-0">
      <div
        class="w-14 h-14 border border-grey-light rounded-md flex-center p-1.5 mr-5 sm:mr-2 sm:w-10 sm:h-10 flex-shrink-0"
      >
        <img
          :src="image"
          alt="image"
          class="max-w-full max-h-full object-contain"
        />
      </div>
      <div class="flex-1 min-w-0 sm:pr-4">
        <div class="font-bold sm:text-sm relative h-6 sm:h-5">
          <span
            class="absolute left-0 right-0 whitespace-nowrap overflow-hidden overflow-ellipsis"
          >
            {{ name }}
          </span>
        </div>
        <div class="font-medium text-grey text-opacity-50 relative h-6 sm:h-5">
          <span
            class="absolute left-0 right-0 overflow-ellipsis whitespace-nowrap overflow-hidden"
          >
            {{ adds }}
          </span>
        </div>
      </div>
    </div>
    <div class="w-2/12 pl-5 sm:hidden">
      <span class="text-grey text-opacity-50 font-medium">х{{ cnt }}</span>
    </div>
    <div class="w-2/12 text-right whitespace-nowrap sm:w-auto sm:text-sm">
      <div>
        <span>{{ totalPrice }}</span>
        <span class="text-grey text-opacity-50 font-medium">{{
          currency
        }}</span>
      </div>
      <div class="hidden sm:block font-medium text-xs text-grey text-opacity-50">{{ price }} {{ currency }} x {{ cnt }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const image = computed(() => require('@/assets/img/product_mock_big.png'))
    const name = computed(() => 'Royal Canin Maxi Adult ')
    const cnt = computed(() => 2)
    const price = computed(() => 1.524)
    const totalPrice = computed(() => '10 500')
    const currency = computed(() => CurrencyModule.currency)
    const adds = computed(() => 'Deluxe edition, Красный, 120 кг ')
    return { image, name, cnt, price, currency, adds, totalPrice }
  },
})
</script>

<style lang="postcss">
</style>