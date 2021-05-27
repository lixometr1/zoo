<template>
  <div
    class="catalog-modal-items rounded-sm border-2 border-white px-9 py-7 flex flex-col"
  >
    <perfect-scrollbar class="flex flex-1 min-h-0 custom-scrollbar max-h-full">
      <div class="flex mr-12 lg:mr-0 lg:flex-col lg:items-start flex-1 lg:pr-5">
        <CatalogModalPopular
          class="flex-shrink-0 mr-9 lg:mr-0 lg:w-full lg:pr-0 lg:mb-4"
        />
        <div class="flex-1 space-y-2.5 lg:w-full">
          <CatalogModalCategoriesItem
            v-for="(item, idx) in col1"
            :key="idx"
            :item="item"
          />
        </div>
      </div>
      <div class="flex flex-1 lg:flex-col lg:items-start mr-9">
        <div class="w-1/2 space-y-2.5 lg:w-full mr-12 lg:mr-0">
          <CatalogModalCategoriesItem
            v-for="(item, idx) in col1"
            :key="idx"
            :item="item"
          />
        </div>
        <div class="w-1/2 space-y-2.5 lg:w-full">
          <CatalogModalCategoriesItem
            v-for="(item, idx) in col1"
            :key="idx"
            :item="item"
          />
        </div>
      </div>
    </perfect-scrollbar>
    <CatalogModalFooter class="flex-shrink-0" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const col1 = computed(() => {
      return [
        {
          name: 'Корм и лакомства для собак',
          children: [
            {
              name: 'Сухой корм для собак',
            },
            {
              name: 'Лакомства',
            },
            {
              name: 'Лакомства',
            },
            {
              name: 'Лакомства',
            },
          ],
        },
        {
          name: 'Здоровье собаки',
          children: [
            {
              name: 'Витамины и добавки',
            },
            {
              name: 'Уход за зубами собаки',
            },
            {
              name: 'Уход за ушами собаки',
            },
            {
              name: 'Лакомства',
            },
          ],
        },
        {
          name: 'Здоровье собаки',
          children: [
            {
              name: 'Витамины и добавки',
            },
            {
              name: 'Уход за зубами собаки',
            },
            {
              name: 'Уход за ушами собаки',
            },
            {
              name: 'Лакомства',
            },
          ],
        },
      ]
    })
    return { col1 }
  },
})
</script>

<style lang="postcss">
.catalog-modal-items {
  @apply bg-grey-600;
}
</style>