<template>
  <form action="#" class="checkout-card" @submit.prevent="onSubmit">
    <CheckoutPersonalData />
    <CheckoutDelivery v-model="delivery" class="mb-9 sm:mb-7" />
    <CheckoutPayment v-model="payment" class="mb-9 sm:mb-7" />
    <CheckoutRecall v-model="recall" class="mb-9 sm:mb-7" />
    <CheckoutTotalInfo class="mb-8 sm:mb-4" />
    <div class="text-right flex flex-col items-end">
      <div class="font-medium text-grey text-opacity-50 text-sm">
        {{ $t('totalToPay') }}:
      </div>
      <div>
        <span class="line-cross text-grey text-opacity-50 text-base">{{
          totalOldPrice
        }}</span>
      </div>
      <div class="mt-1 sm:mt-0">
        <span class="text-3xl sm:text-lg">{{ totalPrice }}</span>
        <span class="text-lg opacity-50 sm:text-xs">{{ currency }}</span>
      </div>
      <button type="submit" class="btn-green mt-2 sm:w-full sm:text-sm">
        {{ $t('makeOrderOn') }} {{ totalPrice }} {{ currency }}
      </button>
      <div class="mt-6">
        <ACheckboxInput v-model="agreement" >
          <template #label>
            <span class="text-sm font-medium sm:text-xs">
              <span class="text-grey text-opacity-50">
                {{ $t('agreeWithContact') }}</span
              >
              <a
                href="#"
                class="uppercase border-b-2 border-dotted border-opacity-50 border-grey hover:text-green hover:border-green transition-all whitespace-nowrap"
                >{{ $t('publicOfferta') }}</a
              >
            </span>
          </template>
        </ACheckboxInput>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  setup() {
    const onSubmit = () => {}
    const totalPrice = computed(() => '3 276')
    const currency = computed(() => CurrencyModule.currency)
    const delivery = ref({})
    const payment = ref({})
    const recall = ref(true)
    const totalOldPrice = computed(() => '10.878')
    const agreement = ref(true)
    return {
      onSubmit,
      totalPrice,
      currency,
      delivery,
      payment,
      recall,
      totalOldPrice,
      agreement,
    }
  },
})
</script>

<style lang="postcss">
</style>