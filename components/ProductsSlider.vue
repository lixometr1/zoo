<template>
  <div class="products-slider">
    <h2 v-if="title" class="mb-9">{{ title }}</h2>
    <client-only>
      <swiper :options="sliderOpts">
        <swiper-slide v-for="(product, idx) in 10" :key="idx">
          <ProductCard :showBtn="false" :showLabels="false" size="sm"/>
        </swiper-slide>
        <div slot="button-next" class="swiper-button-next circle-arrow swiper-button-reset">
          <svgArrowRight width="10" />
        </div>
        <div slot="button-prev" class="swiper-button-prev circle-arrow swiper-button-reset">
          <svgArrowLeft width="10" />
        </div>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
// eslint-disable-next-line import/named
import { SwiperOptions } from 'swiper'
import svgArrowLeft from '@/assets/icons/arrow_left.svg?inline'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
export default defineComponent({
  components: { svgArrowLeft, svgArrowRight },
  props: {
    title: String,
    products: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const sliderOpts: SwiperOptions = {
      slidesPerView: 2,
      threshold: 5,
      breakpoints: {
        1450: {
          slidesPerView: 7
        },
        1300: {
          slidesPerView: 6
        },
        1100: {
          slidesPerView: 5
        },
        990: {
          slidesPerView: 4
        },
        760: {
          slidesPerView: 3
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    }
    return { sliderOpts }
  },
})
</script>

<style lang="postcss">
</style>