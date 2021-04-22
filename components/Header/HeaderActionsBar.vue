<template>
  <div class="py-4 bg-white border-b border-grey-light">
    <div class="container">
      <div class="flex items-center">
        <HeaderCatalogBtn class="mr-8" />
        <HeaderSearch class="flex-grow" />
        <HeaderFeatureBtns class="border-r border-l border-grey-light mx-7" />
        <HeaderCart />
      </div>
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