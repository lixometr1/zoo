<template>
  <div class="flex">
    <CatalogModalMenu class="bg-transparent md:hidden" />
    <div class="flex-1 pl-12 lg:pl-5 md:pl-0 min-w-0 sm:no-gutter">
      <HomeOfferSlider />
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