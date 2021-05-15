<template>
  <div>
    <ProductInfoTabs class="md:hidden" />
    <ProductInfoAccordions class="hidden md:block" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const activeTab = ref(0)
    return { activeTab }
  },
})
</script>

<style lang="postcss">
</style>