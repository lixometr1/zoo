<template>
  <div class="checkout-delivery-address border-b border-grey-light pb-5.5">
    <div class="font-bold mb-4 sm:text-sm sm:mb-3">
      {{ $t('deliveryAddress') }} <span class="text-red">*</span>
    </div>
    <AInput v-model="inputModel" :label="$t('deliveryAddress')">
      <template #prefix>
        <svgMarker width="12" class="text-grey opacity-50" />
      </template>
    </AInput>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgMarker from '@/assets/icons/marker.svg?inline'
export default defineComponent({
  components: { svgMarker },
  props: {
    value: String,
  },
  setup(props, { emit }) {
    const inputModel = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('input', val)
      },
    })
    return { inputModel }
  },
})
</script>

<style lang="postcss">
.checkout-delivery-address {
 
}
</style>