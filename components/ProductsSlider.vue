<template>
  <div class="products-slider">
    <h2 v-if="title" class="mb-9 products-slider__title">
      {{ title }}
    </h2>
    <client-only>
      <swiper class="products-slider__slider" :options="sliderOpts">
        <swiper-slide v-for="(product, idx) in 10" :key="idx">
          <ProductCard :showBtn="false" :showLabels="false" size="sm" :multilineTitle="true" />
        </swiper-slide>
        <div
          slot="button-next"
          class="swiper-button-next products-slider__arrow products-slider__arrow-next circle-arrow swiper-button-reset"
        >
          <svgArrowRight width="10" />
        </div>
        <div
          slot="button-prev"
          class="swiper-button-prev products-slider__arrow products-slider__arrow-prev circle-arrow swiper-button-reset"
        >
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
          slidesPerView: 7,
        },
        1300: {
          slidesPerView: 6,
        },
        1100: {
          slidesPerView: 5,
        },
        990: {
          slidesPerView: 4,
        },
        760: {
          slidesPerView: 3,
        },
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
.products-slider {
  @apply relative;
  &__title {
    @apply lg:absolute lg:top-[40px] lg:pr-[140px] lg:w-full lg:transform lg:-translate-y-1/2 sm:top-[28px]  sm:pr-[110px];
  }
  .circle-arrow {
    @apply lg:top-[10px] lg:mt-0;
    svg {
      @apply sm:w-[8px];
    }
  }
  &__slider {
    @apply lg:pt-[80px] sm:pt-[60px];
  }
  &__arrow-prev {
    @apply lg:right-[68px] lg:left-auto sm:right-[52px];
  }
}
</style>