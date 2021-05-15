<template>
  <div class="product-images-slider">
    <client-only>
      <swiper class="" :options="sliderOpts">
        <swiper-slide v-for="(item, idx) in items" :key="idx">
          <img :src="item.src" alt="product-image">
        </swiper-slide>
        <div
          slot="pagination"
          class="product-images-slider__pagination swiper-pagination"
        ></div>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'

export default defineComponent({
  props: {
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
        spaceBetween: 15,
        slidesPerView: 1,
        threshold: 5,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }
    },
  },
})
</script>

<style lang="postcss">
.product-images-slider {
}
</style>