<template>
  <div class="space-y-9">
    <CatalogFiltersChosen />
    <CatalogFiltersPrice /> 
    <CatalogFiltersBrand /> 
    <CatalogFiltersAttribute title="Возраст" /> 
    <CatalogFiltersAttribute title="Основа корма" />
    
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