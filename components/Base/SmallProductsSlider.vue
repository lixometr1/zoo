<template>
  <div class="small-products-slider">
    <ASlider
      :items="items"
      :title="title"
      :sliderOptions="sliderOpts"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template #slide="{}">
        <ProductCard
          :showBtn="false"
          :showLabels="false"
          size="sm"
          :hoverCollapse="false"
          :multilineTitle="true"
        />
      </template>
    </ASlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
// eslint-disable-next-line import/named
import { SwiperOptions } from 'swiper'
export default defineComponent({
  props: {
    title: String,
    products: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const items = [{}, {}, {}, {}, {}, {}, {}, {}]
    return { items }
  },
  computed: {
    sliderOpts() {
      const sliderOpts: SwiperOptions = {
        slidesPerView: 2,
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
      }
      return sliderOpts
    },
  },
})
</script>

<style lang="postcss">
.small-products-slider {
}
</style>