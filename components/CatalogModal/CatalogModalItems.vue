<template>
  <div class="catalog-modal-items rounded-sm border-2 border-white px-9 py-7 flex flex-col">
    <div class="flex flex-1 min-h-0">
      <CatalogModalPopular />
      <div class="flex-1 max-h-full">
        <CatalogModalCategories />
      </div>
    </div>
    <CatalogModalFooter class="flex-shrink-0"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.catalog-modal-items {
  background: #f8f8f8;
}
</style>