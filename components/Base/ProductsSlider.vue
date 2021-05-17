<template>
  <ASlider
    class="products-slider"
    :items="items"
    :sliderOptions="sliderOpts"
  >
    <template #title>
      <TitleWithAll
        class="slider:mb-0 md:mb-0 mb-6"
        :link="link"
        :title="title"
        :showAll="showAll"
      />
    </template>
    <template #slide="{ item }">
      <ProductCard
        :multilineTitle="false"
        :showReviews="false"
        :item="item"
        v-bind="productOptions"
        class="products-slider__product"
      />
    </template>
  </ASlider>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { plainToClass } from 'class-transformer'
import { SwiperOptions } from 'swiper/index'
import { ProductEntity } from '~/utils/models/product.entity'

export default defineComponent({
  inheritAttrs: false,
  props: {
    title: String,
    link: String,
    showAll: Boolean,
    productOptions: {
      type: Object,
      default: () => ({}),
    },
    // items: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  setup() {
    const items = computed(() => {
      const products = [
        {
          product_item: [
            {
              title:
                'asdas dasd asd ad asdasdsd asd asd sad ksaasd asd lassa sad asd',
              top_sale_label: 1,
              popular_label: 1,
            },
          ],
        },
        {},
        {
          product_item: [
            {
              popular_label: 1,
              price: 100,
              sale_price: 50,
            },
          ],
        },
        {},
        {},
        {},
      ]
      return products.map((product) => {
        return plainToClass(ProductEntity, product)
      })
    })
    return { items }
  },
  computed: {
    sliderOpts() {
      const sliderOpts: SwiperOptions = {
        slidesPerView: 2,
        spaceBetween: 8,
        simulateTouch: false,
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
.products-slider {
  .title-with-all {
    &__link {
      @apply xs:hidden;
    }
  }
}
</style>