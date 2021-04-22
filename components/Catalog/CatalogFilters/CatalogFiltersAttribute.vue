<template>
  <CatalogFiltersItem :title="title" :open="true">
    <CatalogFiltersCheckboxList :items="items" />
  </CatalogFiltersItem>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    title: String,
    // items
  },
  setup() {
    const items = [
      { cnt: 10, name: 'Opti Meal  153' },
      { cnt: 13, name: '1st Choice' },
      { cnt: 10, name: 'Club 4 Paws' },
      { cnt: 103, name: 'Opti Meal  153' },
      { cnt: 13, name: '1st Choice' },
      { cnt: 10, name: 'Club 4 Paws' },
      { cnt: 12, name: 'Opti Meal  153' },
      { cnt: 10, name: '1st Choice' },
      { cnt: 130, name: 'Club 4 Paws' },
      { cnt: 10, name: 'Opti Meal  153' },
      { cnt: 10, name: '1st Choice' },
      { cnt: 12, name: 'Club 4 Paws' },
      { cnt: 10, name: 'Opti Meal  153' },
      { cnt: 10, name: '1st Choice' },
      { cnt: 11, name: 'Club 4 Paws' },
      { cnt: 10, name: 'Opti Meal  153' },
      { cnt: 10, name: '1st Choice' },
      { cnt: 10, name: 'Club 4 Paws' },
    ]
    return {
      items,
    }
  },
})
</script>

<style lang="postcss">
</style>