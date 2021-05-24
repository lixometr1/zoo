<template>
  <div>
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <h1 class="mt-7 md:mt-5 sm:mt-2">{{ $t('brands') }}</h1>
      <div class="mt-1.5">
        <span class="font-medium">{{ $t('totalBrands') }}</span>
        <span class="font-bold">{{ brandsCnt }}</span>
      </div>
      <BrandsFilters class="mt-8" :view.sync="itemsView" />
      <transition name="t-fade" mode="out-in">
        <BrandsItemsText
          v-if="itemsView === 'text'"
          :items="brandsText"
          class="mt-8"
        />
        <BrandsItemsCards v-else :items="brands" class="mt-8" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const breadcrumbs = [
      {
        name: 'Товари для кошек',
      },
      {
        name: 'Корм и лакомства для кошек',
      },
    ]
    const brandsCnt = ref(176)
    const brands = [{}, {}, {}, {}, {}]
    const brandsText = [
      {
        letter: 'A',
        items: [
          {
            title: 'Angella bella',
          },
        ],
      },
      {
        letter: 'C',
        items: [
          {
            title: 'Carn',
          },
          {
            title: 'Chicco',
          },
          {
            title: 'Comfortbaby',
          },
        ],
      },
      {
        letter: 'E',
        items: [
          {
            title: 'Erbesi',
          },
        ],
      },
      {
        letter: 'A',
        items: [
          {
            title: 'Angella bella',
          },
        ],
      },
      {
        letter: 'C',
        items: [
          {
            title: 'Carn',
          },
          {
            title: 'Chicco',
          },
          {
            title: 'Comfortbaby',
          },
        ],
      },
      {
        letter: 'E',
        items: [
          {
            title: 'Erbesi',
          },
        ],
      },
      {
        letter: 'A',
        items: [
          {
            title: 'Angella bella',
          },
        ],
      },
      {
        letter: 'C',
        items: [
          {
            title: 'Carn',
          },
          {
            title: 'Chicco',
          },
          {
            title: 'Comfortbaby',
          },
        ],
      },
      {
        letter: 'E',
        items: [
          {
            title: 'Erbesi',
          },
        ],
      },
    ]
    const itemsView = ref('text')
    return { brandsCnt, brands, breadcrumbs, itemsView, brandsText }
  },
})
</script>

<style lang="postcss">
</style>