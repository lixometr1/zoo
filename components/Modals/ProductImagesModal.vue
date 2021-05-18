<template>
  <ModalContent class="product-images-modal" v-on="$listeners">
    <swiper class="h-full" :options="sliderOpts">
      <swiper-slide v-for="(image, i) in items" :key="i" class="flex-center">
        <img class="max-w-full max-h-full sm:max-w-[70%]" :src="image.src" alt="" />
      </swiper-slide>
    </swiper>
    <div
      :id="'swiper-button-next-' + cId"
      class="swiper-button-next product-images-slider__arrow product-images-slider__arrow-next circle-arrow swiper-button-reset !right-5"
    >
      <svgArrowRight width="10" />
    </div>
    <div
      :id="'swiper-button-prev-' + cId"
      class="swiper-button-prev product-images-slider__arrow product-images-slider__arrow-prev circle-arrow swiper-button-reset !left-5"
    >
      <svgArrowLeft width="10" />
    </div>
  </ModalContent>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
import svgArrowLeft from '@/assets/icons/arrow_left.svg?inline'
import { uid } from 'uid'
interface Image {
  src: string
  type: 'video' | 'image'
}
export default defineComponent({
  components: { svgArrowRight, svgArrowLeft },
  props: {
    items: {
      type: Array as () => Image[],
      default: () => [],
    },
    startIndex: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const cId = uid()
    const sliderOpts: SwiperOptions = {
      initialSlide: props.startIndex,
      slidesPerView: 1,
      spaceBetween: 15,
      navigation: {
        nextEl: '#swiper-button-next-' + cId,
        prevEl: '#swiper-button-prev-' + cId,
      },
    }
    return { sliderOpts, cId }
  },
  computed: {},
})
</script>

<style lang="postcss">
.product-images-modal {
  @apply max-w-[800px] max-h-[500px] h-full md:max-w-full md:w-[90%] sm:max-h-[400px] xs:max-h-[350px]
      py-8;
}
</style>