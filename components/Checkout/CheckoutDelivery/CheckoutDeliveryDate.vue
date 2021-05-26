<template>
  <div class="border-b border-grey-light pb-5.5">
    <div class="font-bold mb-3.5">
      {{ $t('wishDeliveryDate') }} <span class="text-red">*</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>