<template>
  <div class="grid grid-cols-5 gap-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
    <BrandsCard v-for="(item, i) in items" :key="i" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

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
        image: require('@/assets/img/brands_mock_1.png'),
      },
      {
        image: require('@/assets/img/brands_mock_2.png'),
      },
      {
        image: require('@/assets/img/brands_mock_1.png'),
      },
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
        image: require('@/assets/img/brands_mock_1.png'),
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
</style>