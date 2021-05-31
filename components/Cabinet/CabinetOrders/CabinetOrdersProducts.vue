<template>
  <div>
    <div class="flex font-bold mb-4 sm:justify-between">
      <div class="w-8/12 sm:w-auto">
        {{ $t('yourOrder') }}
      </div>
      <div class="w-2/12 sm:hidden">{{ $t('cnt') }}</div>
      <div class="w-2/12 text-right sm:w-auto">{{ $t('price') }}</div>
    </div>
    <div class="space-y-3.5">
      <CabinetOrdersProduct
        v-for="(product, idx) in items"
        :key="idx"
        :item="product"
      />
    </div>
    <div
      class="mt-6 border-b-2 border-t-2 border-dashed border-grey border-opacity-20 py-3.5 font-medium text-sm sm:text-xs"
    >
      <div class="flex justify-between">
        <div class="opacity-50">{{ $t('payment') }}</div>
        <div>{{ payment }}</div>
      </div>
      <div class="flex justify-between mt-2">
        <div class="opacity-50">{{ $t('status') }}</div>
        <div>
          {{ statusText }}
        </div>
      </div>
    </div>
    <div class="mt-3.5 text-right">
      <div class="opacity-50">{{ $t('total') }}:</div>
      <div>
        <span class="font-medium text-2lg sm:text-lg"> {{ totalPrice }} </span
        ><span class="opacity-50 font-medium sm:font-normal">{{
          currency
        }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  setup() {
    const items = [{}, {}, {}]
    const payment = computed(() => 'Картой онлайн')
    const statusText = computed(() => 'Оплачено')
    const totalPrice = computed(() => '2.624 ')
    const currency = computed(() => CurrencyModule.currency)
    return { items, payment, status, statusText, totalPrice, currency }
  },
})
</script>

<style lang="postcss">
</style>