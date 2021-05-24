<template>
  <div class="flex space-x-3 md:flex-col md:space-x-0 md:grid md:grid-cols-2 md:gap-2">
    <BrandsCard
      v-for="(item, i) in items"
      :key="i"
      :item="item"
      class="block h-full flex-1 "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'

export default defineComponent({
  setup() {
    const items = [
      {
        image: require('@/assets/img/brands_mock_1.png'),
      },
      {
        image: require('@/assets/img/brands_mock_2.png'),
      },
      {
        image: require('@/assets/img/brands_mock_1.png'),
      },
      {
        image: require('@/assets/img/brands_mock_2.png'),
      },
    ]

    return { items }
  },
})
</script>

<style lang="postcss">
</style>