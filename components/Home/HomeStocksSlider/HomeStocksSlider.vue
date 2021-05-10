<template>
  <div>
    <AppSlider
      :items="items"
      arrowNextClass="md:!hidden"
      arrowPrevClass="md:!hidden"
      :sliderOptions="sliderOpts"
    >
      <template #title>
        <TitleWithAll link="#" :title="$t('stocks')" />
      </template>
      <template #slide="{ item }">
        <OfferCard v-bind="item" />
      </template>
    </AppSlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'

export default defineComponent({
  setup() {
    const items = [
      {
        sale: '-10%',
        description: 'На продукцию Royal kanin',
        image: require('@/assets/img/feed_mock.png'),
        color: '#C20000',
        bgType: 1,
      },
      {
        sale: '-15%',
        description: 'На продукцию Whiskas',
        image: require('@/assets/img/feed_mock.png'),
        color: '#872B82',
        bgType: 2,
      },
      {
        sale: '-20%',
        description: 'Посмотреть ассортимент',
        image: require('@/assets/img/category_offer_2.png'),
        color: '#fff',
        brand: require('@/assets/img/whiskas_mock.png'),

        bgType: 1,
      },
    ]
    return { items }
  },
  computed: {
    sliderOpts(): SwiperOptions {
      return {
        slidesPerView: 1.2,
        centeredSlides: true,
        centeredSlidesBounds: true,
        spaceBetween: 20,

        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
        },
      }
    },
  },
})
</script>

<style lang="postcss">
</style>