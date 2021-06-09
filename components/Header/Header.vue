<template>
  <div class="header w-full">
    <div class="md:hidden">
      <HeaderTopBar />
      <HeaderMainBar />
      <HeaderActionsBar />
    </div>
    <div class="hidden md:block h-[113px] sm:h-[109px]">
      <HeaderMob />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>