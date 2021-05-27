<template>
  <div class="border-b border-grey-light pb-5.5">
    <div class="font-bold mb-3.5 sm:text-sm">
      {{ $t('wishDeliveryDate') }} <span class="text-red">*</span>
    </div>
    <div class="flex-y-center sm:flex-col sm:items-start">
      <CheckoutDeliveryDatePicker v-model="dateModel" class="mr-5 sm:mr-0 sm:mb-4" />
      <CheckoutDeliveryTimePicker v-model="timeModel" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  inheritAttrs: false,
  props: {
    date: [String],
    time: [String, Number],
  },
  setup(props, { emit }) {
    const dateModel = computed({
      get() {
        return props.date
      },
      set(val) {
        emit('update:date', val)
      },
    })
    const timeModel = computed({
      get() {
        return props.time
      },
      set(val) {
        emit('update:time', val)
      },
    })
    return { dateModel, timeModel }
  },
})
</script>

<style lang="postcss">
</style>