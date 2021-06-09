<template>
  <div class="product-thumb-slider">
    <client-only>
      <swiper
        ref="slider"
        class="min-h-0 h-full"
        :options="sliderOpts"
        @clickSlide="makeSlideActive"
        @ready="onSwiperRedied"
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
            v-if="item.type === 'video'"
            class="product-thumb-slider__video-icon"
          />
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  Ref,
  ref,
  set,
} from '@nuxtjs/composition-api'
import Swiper, { SwiperOptions } from 'swiper/index'
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
    const swiper = ref()
    const makeSlideActive = (idx: number) => {
      emit('input', idx)
    }
    const sliderOpts = ref<SwiperOptions>({
      direction: 'vertical',
      spaceBetween: 8,
      slidesPerView: 'auto',
      centeredSlides: false,
      centeredSlidesBounds: true,
      threshold: 5,
      initialSlide: 0,
      on: {
        click() {
          this.slideTo(this.clickedIndex - 1)
        },
      },
    })
    onMounted(() => {})
    const onSwiperRedied = (sw: any) => {
      swiper.value = sw
      console.log(swiper.value)
    }
    return { makeSlideActive, sliderOpts, onSwiperRedied }
  },
  computed: {},
})
</script>

<style lang="postcss">
.product-thumb-slider {
  &__video-icon {
    @apply absolute top-1/2 left-1/2 
    transform -translate-x-1/2 -translate-y-1/2;
  }
}
</style>