<template>
  <div class="">
    <OffersSlider class="mb-0" link="#" :title="$t('stocksMany')" :items="items" />
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
        date: 'до 22 января',
      },
      {
        sale: '-20%',
        description: 'Посмотреть ассортимент',
        image: require('@/assets/img/feed_mock.png'),
        brand: require('@/assets/img/zoo_mock.png'),
        color: '#fff',
        bgType: 0,
        date: 'до 22 марта',
      },
      {
        sale: '-15%',
        description: 'На продукцию Whiskas',
        brand: require('@/assets/img/whiskas_mock.png'),
        image: require('@/assets/img/home_offer_cat_mock.jpeg'),
        color: '#872B82',
        bgType: 2,
        date: 'до 22 марта',
      },
      {
        sale: '-10%',
        description: 'На продукцию Royal kanin',
        image: require('@/assets/img/feed_mock.png'),
        color: '#C20000',
        bgType: 1,
        date: 'до 22 марта',
      },
      {
        sale: '-20%',
        description: 'Посмотреть ассортимент',
        image: require('@/assets/img/feed_mock.png'),
        color: '#fff',
        bgType: 0,
        date: 'до 22 марта',
      },
      {
        sale: '-15%',
        description: 'На продукцию Whiskas',
        brand: require('@/assets/img/whiskas_mock.png'),
        image: require('@/assets/img/home_offer_cat_mock.jpeg'),

        color: '#872B82',
        bgType: 2,
        date: 'до 22 марта',
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
            centeredSlides: false,
          },
          760: {
            spaceBetween: 0,
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20,
          },
        },
      }
    },
  },
})
</script>

<style lang="postcss">
.offer-card {
  /* &__date {
    @apply absolute bottom-8 left-14 font-bold md:bottom-8 md:left-10 sm:left-5 sm:bottom-4 z-10;
  } */
}
</style>