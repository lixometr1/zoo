<template>
  <div class="checkout-card">
    <h4 class="sm:text-lg sm:mb-2">{{ $t('yourCurrentOrder') }}</h4>
    <div
      class="mt-9 text-grey text-opacity-50 text-lg font-medium grid grid-cols-5 pb-3 border-b border-grey-500 md:mt-5 md:text-base sm:hidden"
    >
      <div>{{ $t('photo') }}</div>
      <div class="col-span-2">
        {{ $t('name') }}
      </div>
      <div>{{ $t('price') }}</div>
      <div class="text-right">
        {{ $t('sum') }}
      </div>
    </div>
    <div>
      <CheckoutProductsItem
        v-for="(item, i) in items"
        :key="i"
        :item="item"
        :cnt.sync="item.cnt"
        @remove="removeItem(i)"
      />
    </div>
    <div
      class="border-b-2 border-dashed border-grey border-opacity-20 pb-4 pt-5 text-right space-y-2.5 sm:space-y-2"
    >
      <div>
        <div class="text-grey text-opacity-50 text-sm xs:text-xs">
          {{ $t('orderSum') }}
        </div>
        <div class="font-medium">
          +{{ totalSum }} <span class="opacity-50">{{ currency }}</span>
        </div>
      </div>
      <div>
        <div class="text-grey text-opacity-50 text-sm xs:text-xs">
          {{ $t('sale') }}
        </div>
        <div class="font-medium text-green">
          -{{ sale }} <span>{{ currency }}</span>
        </div>
      </div>
    </div>
    <div class="mt-7 flex flex-col items-end sm:mt-4.5">
      <div>
        <div class="font-medium text-sm mb-2 opacity-50 xs:text-xs xs:mb-0">
          {{ $t('totalToPay') }}:
        </div>
        <div>
          <span class="text-3xl xs:text-lg"> {{ totalToPay }}</span
          ><span class="opacity-50 text-lg ml-1.5 xs:text-xs">{{ currency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  setup() {
    const items = ref([
      {
        cnt: 1,
      },
      {
        cnt: 2,
      },
      {
        cnt: 1,
      },
    ])
    const removeItem = (idx: number) => {
      items.value.splice(idx, 1)
    }
    const totalSum = computed(() => {
      return '15,980'
    })
    const sale = computed(() => {
      return '3,198'
    })
    const totalToPay = computed(() => {
      return '3 276'
    })
    const currency = computed(() => {
      return CurrencyModule.currency
    })
    return { items, removeItem, totalSum, sale, totalToPay, currency }
  },
})
</script>

<style lang="postcss">
</style>