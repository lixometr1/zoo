<template>
  <div class="hidden md:block">
    <div class="w-[320px] sm:w-full">
      <CabinetSidebar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    scrollToTop: true,

  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>