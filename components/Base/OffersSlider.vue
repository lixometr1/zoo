<template>
  <div class="">
    <ASlider
      :items="items"
      arrowNextClass="md:!hidden"
      arrowPrevClass="md:!hidden"
      :sliderOptions="sliderOpts"
      sliderClass="!pb-8 !-mx-3  md:!-mx-5.5"
      titleClass="sm:!right-0"
    >
      <template #title>
        <TitleWithAll
          class="mb-0"
          :link="link"
          :title="title"
          :showAll="showAll"
        />
      </template>
      <template #slide="{ item }">
        <div class="px-3 sm:px-0">
          <OfferCard :class="{}" v-bind="item" />
        </div>
      </template>
    </ASlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'

export default defineComponent({
  props: {
    title: String,
    link: String,
    showAll: {
      type: Boolean,
      default: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {}
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
            spaceBetween: 0,
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
</style>