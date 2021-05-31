<template>
  <div>
    <CabinetBonusApprovePhone
      v-if="step === 1"
      v-model="phone"
      @send="sendPhone"
    />
    <CabinetBonusApproveCode v-else :phone="phone" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const step = ref(1)
    const sendPhone = () => {
      step.value = 2
    }
    const phone = ref('+38 066 364 19 19')
    return { step, sendPhone, phone }
  },
})
</script>

<style lang="postcss">
</style>