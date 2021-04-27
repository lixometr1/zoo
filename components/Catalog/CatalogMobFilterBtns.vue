<template>
  <div class="flex justify-end md:justify-between items-center">
    <a
      class="items-center font-bold md:flex hidden"
      href="#"
      @click.prevent="openSort"
    >
      <svgSort class="mr-2 text-green" width="26" />
      {{ $t('aSort') }}
    </a>
    <a
      class="flex items-center font-bold"
      href="#"
      @click.prevent="openFilters"
    >
      <svgFilter class="mr-2 text-green" width="22" />
      {{ $t('filters') }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgSort from '@/assets/icons/sort.svg?inline'
import svgFilter from '@/assets/icons/filter.svg?inline'
import useCatalogFilters from '~/utils/compositions/useCatalogFilters'
export default defineComponent({
  components: { svgSort, svgFilter },
  setup() {
    const openSort = () => {}
    const openFilters = () => {
      const { open } = useCatalogFilters()
      open()
    }
    return {
      openSort,
      openFilters,
    }
  },
})
</script>

<style lang="postcss">
</style>