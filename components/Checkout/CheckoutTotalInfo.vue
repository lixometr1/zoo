<template>
  <div
    class="py-3.5 border-t border-b border-dashed border-grey border-opacity-20 text-right space-y-3"
  >
    <div>
      <div class="text-grey text-opacity-50 text-sm">{{ $t('orderSum') }}</div>
      <div class="font-medium">
        <span>+{{ orderSum }}</span>
        <span class="text-grey text-opacity-50">{{ currency }}</span>
      </div>
    </div>
    <div>
      <div class="text-grey text-opacity-50 text-sm">
        {{ $t('deliveryCost') }}
      </div>
      <div class="font-medium">
        <span>+{{ deliveryCost }}</span>
        <span class="text-grey text-opacity-50">{{ currency }}</span>
      </div>
    </div>
    <div>
      <div class="text-grey text-opacity-50 text-sm">
        {{ $t('sale') }}
      </div>
      <div class="font-medium text-green">
        <span>-{{ sale }}</span>
        <span class="">{{ currency }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  setup() {
    const currency = computed(() => CurrencyModule.currency)
    const orderSum = computed(() => '15,980')
    const deliveryCost = computed(() => 580)
    const sale = computed(() => '3,196')
    return { currency, orderSum, deliveryCost, sale }
  },
})
</script>

<style lang="postcss">
</style>