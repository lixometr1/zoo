<template>
  <div class="product-thumb-slider">
    <client-only>
      <swiper
        class="min-h-0 h-full"
        :options="sliderOpts"
        @clickSlide="makeSlideActive"
      >
        <swiper-slide
          v-for="(item, idx) in items"
          :key="idx"
          class="!h-[100px] border border-grey-light rounded-md cursor-pointer"
        >
          <img
            :src="item.src"
            class="w-full h-full object-contain"
            :class="{ 'p-2': item.type !== 'video' }"
            alt="product-thumbnail"
          />
          <VideoIcon
            class="product-thumb-slider__video-icon"
            v-if="item.type === 'video'"
          />
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'
interface Item {
  src: string
  type: 'video' | 'image'
}
export default defineComponent({
  props: {
    value: {
      type: Number,
    },
    items: {
      type: Array as () => Item[],
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const makeSlideActive = (idx: number) => {
      emit('input', idx)
    }
    return { makeSlideActive }
  },
  computed: {
    sliderOpts(): SwiperOptions {
      return {
        direction: 'vertical',
        spaceBetween: 8,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        threshold: 5,
        initialSlide: 0
      }
    },
  },
})
</script>

<style lang="postcss">
.product-thumb-slider {
  &__video-icon {
    @apply absolute top-1/2 left-1/2 
    transform -translate-x-1/2 -translate-y-1/2 ;
  }
}
</style>