<template>
  <div class="header">
    <div class="md:hidden">
      <HeaderTopBar />
      <HeaderMainBar />
      <HeaderActionsBar />
    </div>
    <div class="hidden md:block">
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