<template>
  <div class="pb-16 md:pb-10 sm:pb-0">
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <CategoryTitle class="mt-4 md:mt-5" :title="name" />
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
import {
  computed,
  defineComponent,
  useAsync,
  useContext,
  useRoute,
} from '@nuxtjs/composition-api'
import usePageFetch from '@/utils/compositions/usePageFetch'
import { useApiGetCategory } from '~/utils/api/category'
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
    const route = useRoute()
    const slug = computed(() => route.value.params.slug)

    // const { result } = usePageFetch({
    //   api: useApiGetCategory(),
    //   args: {
    //     slug: slug.value,
    //   },
    // })
    // console.log(result)
    // const name = computed(() => result.value?.category.name)
    const name = computed(() => 'Test category')
    return {
      name,
      // result,
      breadcrumbs,
    }
  },
})
</script>

<style lang="postcss">
</style>