<template>
  <ASlider
    sliderClass="!pb-8 !-mx-3"
    :items="items"
    :sliderOptions="sliderOpts"
  >
    <template #slide="{ item }">
      <CategoryOfferSliderItem v-bind="item" />
    </template>
  </ASlider>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'
export default defineComponent({
  setup() {
    const items = [
      {
        title: 'Ваш мопс не доволен кормом?',
        description:
          'Мы знаем как поднять ему настроение! Переходите в каталог еды для породы Мопс и порайдуте своего питомца!',
        btn: 'Посмотреть ассортимент',
        image: require('@/assets/img/category_offer_1.png'),
        color: '#C20000',
        bgType: 1,
      },
      {
        sale: '-15%',
        description: 'На продукцию Whiskas',
        btn: 'Посмотреть ассортимент',
        image: require('@/assets/img/category_offer_2.png'),
        color: '#872B82',
        bgType: 2,
        brand: require('@/assets/img/whiskas_mock.png'),
      },
      {
        title: 'Ваш мопс не доволен кормом?',
        description:
          'Мы знаем как поднять ему настроение! Переходите в каталог еды для породы Мопс и порайдуте своего питомца!',
        btn: 'Посмотреть ассортимент',
        image: require('@/assets/img/category_offer_1.png'),
        color: '#C20000',
        bgType: 1,
      },
      {
        sale: '-15%',
        description: 'На продукцию Whiskas',
        btn: 'Посмотреть ассортимент',
        image: require('@/assets/img/category_offer_2.png'),
        color: '#872B82',
        bgType: 2,
        // type: 'image'
      },
    ]
    return { items }
  },
  computed: {
    sliderOpts(): SwiperOptions {
      return {
        // spaceBetween: 15,
        slidesPerView: 1,
        breakpoints: {
          1100: {
            slidesPerView: 2,
          },
        },
      }
    },
  },
})
</script>

<style lang="postcss">
</style>