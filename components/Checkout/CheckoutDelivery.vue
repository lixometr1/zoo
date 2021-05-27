<template>
  <div class="mt-5">
    <h4 class="sm:text-lg mb-3">
      {{ $t('deliveryWayAndAdress') }} <span class="text-red">*</span>
    </h4>
    <CheckoutDeliveryCity v-model="city" class="mb-5.5 sm:mb-4" />
    <CheckoutDeliveryType v-model="type" class="mb-5.5 sm:mb-4" />
    <CheckoutDeliveryDate :date.sync="date" :time.sync="time" class="mb-5.5" />
    <CheckoutDeliveryAddress v-model="address" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const city = ref('Киев')
    const type = ref('')
    const date = ref('')
    const time = ref(1)
    const address = ref('')
    return { city, type, date, address, time }
  },
})
</script>

<style lang="postcss">
</style>