<template>
  <div>
    <h4 class="mb-6 sm:text-2lg">Сухой корм для собак</h4>
    <div class="pb-4.5 border-b border-grey border-opacity-30 sm:pb-1.5">
      <ProductSubCategoriesList :items="listItems" />
    </div>
    <div class="pt-8 sm:pt-5">
      <ProductSubCategoriesCollapse :items="collapseItems" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const listItems = [
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Pro Plan',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Pro Plan',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
      {
        name: 'Royal Canin',
        cnt: 82,
      },
    ]
    const collapseItems = [
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
      {
        name:
          'Royal Canin Digestive Care Mini Сухой корм для собак малых пород собак фыв фы вфы вфв',
      },
    ]
    return { listItems, collapseItems }
  },
})
</script>

<style lang="postcss">
</style>