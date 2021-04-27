<template>
  <perfect-scrollbar class="px-9 custom-scrollbar lg:px-5 max-h-full">
    <div class="flex space-x-4">
      <div class="w-1/3 space-y-2.5 lg:w-1/2">
        <CatalogModalCategoriesItem
          v-for="(item, idx) in col1"
          :key="idx"
          :item="item"
        />
      </div>
      <div class="w-1/3 space-y-2.5 lg:w-1/2">
        <CatalogModalCategoriesItem
          v-for="(item, idx) in col1"
          :key="idx"
          :item="item"
        />
      </div>
      <div class="w-1/3 space-y-2.5 lg:w-1/2">
        <CatalogModalCategoriesItem
          v-for="(item, idx) in col1"
          :key="idx"
          :item="item"
        />
      </div>
    </div>
  </perfect-scrollbar>
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
    const col2 = computed(() => {
      return 5
    })
    const col3 = computed(() => {
      return 5
    })
    return { col1, col2, col3 }
  },
})
</script>

<style lang="postcss">
</style>