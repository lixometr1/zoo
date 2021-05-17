<template>
  <div>
    <TitleWithAll class="mb-9 md:mb-5 " link="#" :title="$t('popular')" />
    <ASlider
      sliderClass="category-popular-slider"
      :items="items"
      :sliderOptions="sliderOpts"
    >
      <template #slide="{}">
        <ProductCard
          :multilineTitle="false"
          :showReviews="false"
          class="category-popular-slider__product"
        />
      </template>
    </ASlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'
export default defineComponent({
  setup() {
    const items = [{}, {}, {}, {}, {}, {}]
    return { items }
  },
  computed: {
    sliderOpts() {
      const sliderOpts: SwiperOptions = {
        slidesPerView: 2,
        spaceBetween: 8,
        breakpoints: {
          1200: {
            slidesPerView: 5,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          650: {
            slidesPerView: 3,
          },
        },
      }
      return sliderOpts
    },
  },
})
</script>

<style lang="postcss">
.category-popular-slider {
  /* margin-bottom: -250px;
    padding-bottom: 250px; */
  /* z-index: 1000; */
  position: relative;
  /* &__product {
        &:hover {
            position: absolute;
            height: 700px;
            width: 100%;
        }
    } */
}
</style>