<template>
  <div class="pt-5.5">
    <div class="container">
      <HomeFirstBlock class="mb-16 lg:mb-10 md:mb-12" />
      <HomeCategories class="mb-18 md:mb-8" />
      <ProductsSlider
        :title="$t('stockItems')"
        class="mb-18 md:mb-8"
        :productOptions="{ showChooseCnt: true }"
      />
      <HomeStocksSlider class="mb-18 md:mb-10" />
      <ProductsSlider :title="$t('sellingHits')" class="mb-18 md:mb-10" />
      <ProductsSlider :title="$t('productsNew')" class="mb-18 md:mb-10" />
    </div>
    <BrandsBlock
      :title="$t('brands')"
      :showAll="true"
      description="Наш интернет-магазин является официальным дилером представленных торговых марок. Это означает, что вся продукция действительно фирменная, никакого «серого импорта», на все товары распространяется гарантия производителя, цены в нашем магазине соответствуют, рекомендованным производителем."
    />
    <div class="container">
      <SeoText class="mt-18 md:mt-10" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>