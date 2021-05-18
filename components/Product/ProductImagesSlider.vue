<template>
  <div class="product-images-slider">
    <client-only>
      <swiper
        class="product-images-slider__slider"
        :options="sliderOpts"
        @clickSlide="clickSlide"
      >
        <swiper-slide
          v-for="(item, idx) in items"
          :key="idx"
          class="product-images-slider__slide"
        >
          <img class="mx-auto" :src="item.src" alt="product-image" />
          <VideoIcon
            v-if="item.type === 'video'"
            class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white"
          />
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
  setup(props, { emit }) {
    const clickSlide = (idx: number) => {
      emit('open', idx)
    }
    return { clickSlide }
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
  @apply md:h-[400px] sm:h-[300px];
  &__slider {
    @apply pb-8 h-full;
  }
  &__pagination {
    .swiper-pagination-bullet {
      @apply bg-grey-500 opacity-100;
    }
    .swiper-pagination-bullet-active {
      @apply bg-green;
    }
  }
  &__slide {
    @apply p-4 relative cursor-pointer flex-center;
    img {
      @apply max-h-full max-w-[80%] object-contain h-auto;
    }
  }
}
</style>