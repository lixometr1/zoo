<template>
  <CatalogFiltersItem :title="$t('brand')" :open="true">
    <div class="relative">
      <svgSearch
        width="18"
        class="absolute left-4.5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
        @click="search"
      />
      <input
        v-mode="searchPhrase"
        type="text"
        class="catalog-filters-brand-input"
        placeholder="Поиск по списку"
        @keypress.enter="search"
      />
    </div>
    <CatalogFiltersCheckboxList class="mt-5" :items="items" />
  </CatalogFiltersItem>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgSearch from '@/assets/icons/search.svg?inline'
export default defineComponent({
  components: { svgSearch },
  setup() {
    const searchPhrase = ref('')
    const items = [
      { name: 'Opti Meal  153' },
      { name: '1st Choice' },
      { name: 'Club 4 Paws' },
      { name: 'Opti Meal  153' },
      { name: '1st Choice' },
      { name: 'Club 4 Paws' },
      { name: 'Opti Meal  153' },
      { name: '1st Choice' },
      { name: 'Club 4 Paws' },
      { name: 'Opti Meal  153' },
      { name: '1st Choice' },
      { name: 'Club 4 Paws' },
      { name: 'Opti Meal  153' },
      { name: '1st Choice' },
      { name: 'Club 4 Paws' },
      { name: 'Opti Meal  153' },
      { name: '1st Choice' },
      { name: 'Club 4 Paws' },
    ]
    const search = () => {}
    return {
      search,
      items,
      searchPhrase,
    }
  },
})
</script>

<style lang="postcss">
.catalog-filters-brand-input {
  @apply z-[9] border border-grey-light rounded-md pl-12 py-3 font-medium 
          placeholder-opacity-50 placeholder-grey outline-none
          w-full;
}
</style>