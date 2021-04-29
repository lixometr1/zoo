<template>
  <div class="products-slider">
    <h2 v-if="title" class="mb-9 products-slider__title">
      {{ title }}
    </h2>
    <client-only>
      <swiper class="products-slider__slider" :options="sliderOpts">
        <swiper-slide v-for="(product, idx) in 10" :key="idx">
          <ProductCard
            :showBtn="false"
            :showLabels="false"
            size="sm"
            :multilineTitle="true"
          />
        </swiper-slide>
      </swiper>
      <div
        :id="'swiper-button-next-' + _uid"
        class="swiper-button-next products-slider__arrow products-slider__arrow-next circle-arrow swiper-button-reset"
      >
        <svgArrowRight width="10" />
      </div>
      <div
        :id="'swiper-button-prev-' + _uid"
        class="swiper-button-prev products-slider__arrow products-slider__arrow-prev circle-arrow swiper-button-reset"
      >
        <svgArrowLeft width="10" />
      </div>
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
  computed: {
    sliderOpts() {
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
          nextEl: '#swiper-button-next-' + this._uid,
          prevEl: '#swiper-button-prev-' + this._uid,
        },
      }
      return sliderOpts
    },
  },
})
</script>

<style lang="postcss">
.products-slider {
  @apply relative;
  &__title {
    @apply lg:absolute lg:top-[40px] lg:pr-[140px] lg:w-full lg:transform lg:-translate-y-1/2 sm:top-[28px]  sm:pr-[110px];
  }
  &__arrow {
    @apply lg:top-[10px] mt-0;
    svg {
      @apply sm:w-[8px];
    }
  }
  &__slider {
    @apply lg:pt-[80px] sm:pt-[60px];
  }
  &__arrow-next {
    @apply transform translate-x-full -right-5 lg:right-0 lg:translate-x-0;

    @media screen and (max-width: 1680px) {
      right: 20px;
      transform: translate(0);
    }
  }
  &__arrow-prev {
    @apply -left-5 transform -translate-x-full lg:right-[80px] sm:right-[62px];
    @media screen and (max-width: 1680px) {
      left: 20px;
      transform: translate(0);
    }
    @screen lg {
      left: auto;
    }
  }
}
</style>