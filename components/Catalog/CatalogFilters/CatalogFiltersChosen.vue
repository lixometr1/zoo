<template>
  <div class="catalog-filters-chosen">
    <div
      class="flex-y-center justify-between pb-4 border-b border-opacity-30 border-grey"
    >
      <div class="flex-y-center">
        <svgFilters width="20" class="text-green mr-3" />
        <div class="text-lg font-bold sm:text-sm">{{ $t('youChoose') }}:</div>
      </div>
      <a
        href="javascript:void(0)"
        class="flex-y-center"
        @click.prevent="clearAll"
      >
        <svgCross width="8" class="text-blue mr-2" />
        <div class="text-blue font-bold text-sm uppercase sm:text-xs">
          {{ $t('clear') }} {{ $t('all') }}
        </div>
      </a>
    </div>
    <perfect-scrollbar class="catalog-filters-chosen__items custom-scrollbar">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="catalog-filters-chosen__item font-medium"
      >
        <span class="text-grey text-opacity-50 mr-2">{{ item.name }}:</span>
        <span class="truncate mr-2">{{ item.value }}</span>
        <svgCross
          width="8"
          class="text-grey text-opacity-70 flex-shrink-0 cursor-pointer"
          @click="removeItem(item)"
        />
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgFilters from '@/assets/icons/filters.svg?inline'
import svgCross from '@/assets/icons/cross.svg?inline'
export default defineComponent({
  components: { svgFilters, svgCross },
  setup() {
    const items = [
      {
        name: 'Бренд',
        value: 'Club 4, Paws, Some other sadsdd sadsd',
      },
      {
        name: 'Основа корма',
        value: 'Кролик, asdasdas, ads',
      },
      {
        name: 'Бренд',
        value: 'Club 4',
      },
      {
        name: 'Бренд',
        value: 'Club 4',
      },
      {
        name: 'Бренд',
        value: 'Club 4',
      },
      {
        name: 'Бренд',
        value: 'Club 4',
      },
    ]
    const clearAll = () => {}
    const removeItem = () => {}

    return { clearAll, items, removeItem }
  },
})
</script>

<style lang="postcss">
.catalog-filters-chosen {
  &__items {
    @apply flex items-start flex-col space-y-1.5 mt-7 h-[188px] pr-8;
  }
  &__item {
    @apply flex-y-center py-2 px-5.5 rounded-full border 
    border-grey-light bg-white max-w-full whitespace-nowrap
    sm:px-4;
  }
}
</style>