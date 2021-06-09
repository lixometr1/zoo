<template>
  <div class="pt-5.5">
    <div class="container">
      <HomeFirstBlock
        class="mb-16 lg:mb-10 md:mb-12"
        :sliderItems="offerSliderItems"
      />
      <HomeCategories class="mb-18 md:mb-8" />
      <ProductsSliderCollapse
        :title="$t('stockItems')"
        class="mb-18 md:mb-8"
        :productOptions="{ showChooseCnt: true }"
      />
      <HomeStocksSlider class="mb-18 md:mb-10" />
      <ProductsSliderCollapse
        :title="$t('sellingHits')"
        class="mb-18 md:mb-10"
      />
      <ProductsSliderCollapse
        :title="$t('productsNew')"
        class="mb-18 md:mb-10"
      />
    </div>
    <BrandsBlock
      :title="$t('brands')"
      :showAll="true"
      description="Наш интернет-магазин является официальным дилером представленных торговых марок. Это означает, что вся продукция действительно фирменная, никакого «серого импорта», на все товары распространяется гарантия производителя, цены в нашем магазине соответствуют, рекомендованным производителем."
    />
    <div class="container">
      <SeoText class="mt-18 md:mt-10" :items="seoContent" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useAsync,
  useFetch,
  useMeta,
} from '@nuxtjs/composition-api'
import { useApiGetHomePage } from '@/utils/api/home'
import useSeo from '@/utils/compositions/useSeo'
import setComputed from '@/utils/helpers/set-computed'
import useModal from '~/utils/compositions/useModal'
import { ModalName } from '~/types/modal.enum'
export default defineComponent({
  setup() {
    const { exec, result } = useApiGetHomePage({
      loading: true,
    })
    // useAsync(async () => {
    //   // await exec({})
    //   console.log(result.value)
    // })
    useSeo(computed(() => result.value?.seo))
    const offerSliderItems = setComputed(
      () => result.value?.data?.home_top_slider
    )
    const seoContent = setComputed(() => result.value?.data?.main_page_content)
    return { result, offerSliderItems, seoContent }
  },
  head: {},
})
</script>

<style lang="postcss">
</style>