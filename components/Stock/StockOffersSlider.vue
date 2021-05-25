<template>
  <div class="">
    <ASlider
      :items="items"
      :sliderOptions="sliderOpts"
      sliderClass="!pb-8 !-mx-3 md:!-mx-5.5"
    >
      <template #title>
        <TitleWithAll
          class="mb-0 slider:mb-0 md:mb-0"
          :link="link"
          :title="$t('otherStocks')"
          :showAll="showAll"
        />
      </template>
      <template #slide="{ item }">
        <div class="px-3 sm:px-0">
          <StocksItem :class="{}" :item="item" />
        </div>
      </template>
    </ASlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'
import { Breakpoints } from '~/types/constants'
import useResizeValue from '~/utils/compositions/useResizeValue'

export default defineComponent({
  props: {
    title: String,
    link: String,

    // items: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  setup() {
    const items = [
      {
        offer: {
          sale: '-10%',
          description: 'На продукцию Royal kanin',
          image: require('@/assets/img/feed_mock.png'),
          color: '#C20000',
          bgType: 1,
          date: 'до 22 января',
        },
        title:
          'Старт распродаж <span style="color: #EE1944;">Royal Canin ADULT</span>',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
        date: 'до 31 января',
      },
      {
        offer: {
          sale: '-20%',
          description: 'Посмотреть ассортимент',
          image: require('@/assets/img/feed_mock.png'),
          brand: require('@/assets/img/zoo_mock.png'),
          color: '#fff',
          bgType: 0,
          date: 'до 22 марта',
        },
        title:
          'Харьков - держись! <span style="color: #20BD56;">Бесплатные доставки</span>!',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
        date: 'до 31 января',
      },
      {
        offer: {
          sale: '-15%',
          description: 'На продукцию Whiskas',
          brand: require('@/assets/img/whiskas_mock.png'),
          image: require('@/assets/img/home_offer_cat_mock.jpeg'),
          color: '#872B82',
          bgType: 2,
          date: 'до 22 марта',
        },
        title:
          'Харьков - держись! <span style="color: #20BD56;">Бесплатные доставки</span>!',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
        date: 'до 31 января',
      },
      {
        offer: {
          sale: '-10%',
          description: 'На продукцию Royal kanin',
          image: require('@/assets/img/feed_mock.png'),
          color: '#C20000',
          bgType: 1,
          date: 'до 22 января',
        },
        title:
          'Старт распродаж <span style="color: #EE1944;">Royal Canin ADULT</span>',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
        date: 'до 31 января',
      },
      {
        offer: {
          sale: '-20%',
          description: 'Посмотреть ассортимент',
          image: require('@/assets/img/feed_mock.png'),
          brand: require('@/assets/img/zoo_mock.png'),
          color: '#fff',
          bgType: 0,
          date: 'до 22 марта',
        },
        title:
          'Харьков - держись! <span style="color: #20BD56;">Бесплатные доставки</span>!',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
        date: 'до 31 января',
      },
      {
        offer: {
          sale: '-15%',
          description: 'На продукцию Whiskas',
          brand: require('@/assets/img/whiskas_mock.png'),
          image: require('@/assets/img/home_offer_cat_mock.jpeg'),
          color: '#872B82',
          bgType: 2,
          date: 'до 22 марта',
        },
        title:
          'Харьков - держись! <span style="color: #20BD56;">Бесплатные доставки</span>!',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
        date: 'до 31 января',
      },
    ]
    const { value: showAll } = useResizeValue((wWidth) => {
      return wWidth > Breakpoints.sm
    })
    return { items, showAll }
  },
  computed: {
    sliderOpts(): SwiperOptions {
      return {
        slidesPerView: 1.2,
        centeredSlides: true,
        spaceBetween: 20,
        centeredSlidesBounds: true,
        slidesOffsetBefore: 20,
        slidesOffsetAfter: 20,
        breakpoints: {
          1200: {
            slidesPerView: 3,
            centeredSlides: false,
            spaceBetween: 0,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
          760: {
            spaceBetween: 0,
            slidesPerView: 2,
            slidesOffsetBefore: 10,
            slidesOffsetAfter: 10,
          },
          600: {
            slidesPerView: 2,
            centeredSlides: false,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
          },
        },
      }
    },
  },
})
</script>

<style lang="postcss">
</style>