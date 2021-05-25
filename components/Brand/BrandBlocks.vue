<template>
  <div>
    <BrandFullBanner />
    <BrandOffers />
    <BrandCategories />
    <BrandInfoBlock v-bind="infoBlock2" />
    <BrandInfoBlock v-bind="infoBlock" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const infoBlock = {
      title: 'Одежда для собак',
      description:
        'Интернет-магазин "Zoo.com.ua" доставляет продукты к вам домой, в офис, на дачу, а вы экономите время и силы. Мы внимательно следим за сроками годности, поэтому гарантируем свежесть товара, который вы приобретаете.',
      image: require('@/assets/img/stock_info_block_mock.png'),
    }
    const infoBlock2 = {
      title:
        'Скидки на всю продукцию <span style="color: #EE1944;">Royal Canin</span>!',
      description:
        'Интернет-магазин "Zoo.com.ua" доставляет продукты к вам домой, в офис, на дачу, а вы экономите время и силы. Мы внимательно следим за сроками годности, поэтому гарантируем свежесть товара, который вы приобретаете.',
      type: 2,
      imageOut: true,
      image: require('@/assets/img/stock_image_offer_mock.png'),
    }
    return { infoBlock, infoBlock2 }
  },
})
</script>

<style lang="postcss">
</style>