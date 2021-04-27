<template>
  <div class="container">
    <AppBreadcrumbs :items="breadcrumbs" />
    <div class="flex">
      <div class="w-[300px] flex-shrink-0 mr-12 lg:hidden">
        <CatalogFilters />
      </div>
      <div class="flex-1 min-w-0">
        <CatalogHeader />
        <div class="border-b border-grey border-opacity-20 pb-5.5">
          <CatalogSubCategories class="lg:-mr-9 md:-mr-5.5" />
        </div>
        <div class="py-5.5 lg:border-b border-grey border-opacity-20 lg:mb-5.5">
          <CatalogTags class="lg:-mr-9 md:-mr-5.5" />
        </div>
        <div>
          <CatalogMobFilterBtns class="hidden lg:flex mb-4" />
          <CatalogProducts />
          <div class="-mt-3">
            <CatalogLazyLoadBar class="!rounded-t-none" :cnt="22" />
          </div>
          <div class="flex justify-center mt-7">
            <APagination v-model="page" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-28 sm:mt-16">
      <ProductsSlider title="Акции" />
      <ProductsSlider class="mt-20 md:mt-9" title="Просмотренные товары" />
    </div>
    <div class="mt-20 sm:mt-10">
      <CatalogSeoText />
    </div>
    <CatalogMobFilters />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

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
    const page = ref(1)
    return {
      page,
      breadcrumbs,
    }
  },
})
</script>

<style >
</style>