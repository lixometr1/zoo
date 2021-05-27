<template>
  <div class="border-b border-grey-light pb-5.5">
    <h4 class="sm:text-lg mb-3">
      {{ $t('paymentWay') }}
    </h4>
    <ARadioGroup v-model="paymentType" :items="paymentTypes" class="sm:space-y-3"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const paymentType = ref(1)
    const paymentTypes = [
      {
        label: 'Наложенный платеж',
        value: 1,
      },
      {
        label: 'Оплата онлайн',
        value: 2,
      },
      {
        label: 'Картой при получении',
        value: 3,
      },
    ]
    return { paymentType, paymentTypes }
  },
})
</script>

<style lang="postcss">
</style>