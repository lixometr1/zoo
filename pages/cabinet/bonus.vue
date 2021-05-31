<template>
  <div>
    <CabinetBonusInfo v-if="isApproved" />
    <CabinetBonusApprove v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
    scrollToTop: true,
  setup() {
    const isApproved = ref(true)
    return { isApproved }
  },
})
</script>

<style lang="postcss">
</style>