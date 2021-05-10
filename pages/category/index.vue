<template>
  <div class="pb-16 md:pb-10 sm:pb-0">
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <CategoryTitle class="mt-7 md:mt-5" />
      <CategoryOfferSlider class="mt-9 md:mt-5" />
      <CategorySubCategories class="mt-24 md:mt-5" />
    </div>
    <BrandsBlock :title="$t('categoryBrands')" class="mt-24 md:mt-5" />
    <div class="container">
      <CategoryPopularSlider class="mt-18 md:mt-12 sm:mt-9" />
      <SeoText class="mt-32 md:mt-15 sm:mt-8" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const breadcrumbs = [
      {
        name: 'Каталог',
      },
      {
        name: 'Товары для кошек',
      },
      {
        name: 'Корм и лакомства для кошек',
      },
    ]
    return {
      breadcrumbs,
    }
  },
})
</script>

<style lang="postcss">
</style>