<template>
  <div>
    <TitleWithAll class="hidden md:flex" :link="link" :title="title" />
    <AppSlider
      sliderClass="products-slider"
      :items="items"
      :sliderOptions="sliderOpts"
      class="md:hidden"
    >
      <template #title>
        <TitleWithAll class="lg:mb-3" :link="link" :title="title" />
      </template>
      <template #slide="{ item }">
        <ProductCard
          :multilineTitle="false"
          :showReviews="false"
          :item="item"
          class="products-slider__product"
        />
      </template>
    </AppSlider>
    <ProductsCollapse :items="items" class="hidden md:block" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { plainToClass } from 'class-transformer'
import { SwiperOptions } from 'swiper/index'
import { ProductEntity } from '~/utils/models/product.entity'
export default defineComponent({
  props: {
    title: String,
    link: String,
  },
  setup() {
    const items = computed(() => {
      const products = [
        {
          product_item: [
            {
              top_sale_label: 1,
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
</style>