<template>
  <div class="app-slider">
    <div
      v-if="title || $slots.title"
      class="app-slider__title"
      :class="titleClass"
    >
      <slot name="title">
        <h2>
          {{ title }}
        </h2>
      </slot>
    </div>
    <client-only>
      <div class="relative">
        <swiper
          class="app-slider__slider"
          :class="sliderClass"
          :options="sliderOpts"
        >
          <swiper-slide
            v-for="(item, idx) in items"
            :key="idx"
            :class="slideClass"
          >
            <slot name="slide" v-bind="{ item, idx }" />
          </swiper-slide>
        </swiper>
        <div
          :id="'swiper-button-next-' + _uid"
          :class="arrowNextClass"
          class="swiper-button-next app-slider__arrow app-slider__arrow-next circle-arrow swiper-button-reset "
        >
          <svgArrowRight width="10" />
        </div>
        <div
          :id="'swiper-button-prev-' + _uid"
          :class="arrowPrevClass"
          class="swiper-button-prev app-slider__arrow app-slider__arrow-prev circle-arrow swiper-button-reset"
        >
          <svgArrowLeft width="10" />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { SwiperOptions } from 'swiper/index'
import svgArrowLeft from '@/assets/icons/arrow_left.svg?inline'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
export default defineComponent({
  components: { svgArrowLeft, svgArrowRight },
  props: {
    title: String,
    sliderOptions: {
      type: Object,
      default: () => ({}),
    },
    slideClass: {
      type: [Object, Array, String],
    },
    sliderClass: {
      type: [Object, Array, String],
    },
    items: {
      type: Array,
      default: () => [],
    },
    arrowPrevClass: {
      type: [Array, String, Object],
    },
    arrowNextClass: {
      type: [Array, String, Object],
    },
    titleClass: {
      type: [Array, String, Object],
    },
  },
  computed: {
    sliderOpts(): SwiperOptions {
      const sliderOpts: SwiperOptions = {
        threshold: 5,
        navigation: {
          nextEl: '#swiper-button-next-' + this._uid,
          prevEl: '#swiper-button-prev-' + this._uid,
        },
      }
      return Object.assign({}, sliderOpts, this.sliderOptions)
    },
  },
})
</script>

<style lang="postcss">
.app-slider {
  @apply relative;
  &__title {
    @apply mb-9 
          slider:absolute slider:top-[40px] left-0 slider:right-[140px] slider:transform slider:-translate-y-1/2 
          sm:top-[28px]  sm:right-[110px] z-20;
  }
  &__arrow {
    @apply slider:top-[10px] mt-0;
   
  }
  &__slider {
    @apply slider:pt-[80px] sm:pt-[60px];
  }
  &__arrow-next {
    @apply transform translate-x-full -translate-y-1/2  -right-9 slider:right-0 slider:transform-none;

    /* @media screen and (max-width: 1680px) {
      right: 20px;
      transform: translate(0, -50%);
    } */
    /* @screen slider {
      transform: translate(0);
    } */
  }
  &__arrow-prev {
    @apply !-left-9 transform -translate-x-full -translate-y-1/2  slider:right-[60px] sm:right-[45px] 
    slider:transform-none slider:left-auto;
    /* @media screen and (max-width: 1680px) {
      left: 20px;
      transform: translate(0, -50%);
    } */
    /* @screen slider {
      transform: translate(0);
      left: auto;
    } */
  }
}
</style>