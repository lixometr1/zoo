<template>
  <div class="product-hero-image">
    <ProductLabels
      class="absolute left-[120px] top-0 space-x-2 z-20 md:flex-col md:space-x-0 md:space-y-1.5 md:left-0"
      :popular="true"
      :topSale="true"
    />
    <div class="md:hidden flex items-start h-[425px]">
      <ProductThumbSlider
        v-model="activeImageIndex"
        class="w-[100px] h-full"
        :items="images"
      />
      <ProductImage class="ml-3 h-full flex-1" :item="activeImage" />
    </div>
    <div class="hidden md:block">
      <ProductImagesSlider :items="images" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const images = ref([
      {
        src: require('@/assets/img/product_mock_big.png'),
        type: 'image',
      },
      {
        src: require('@/assets/img/product_mock_big.png'),
        type: 'image',
      },
      {
        src: require('@/assets/img/product_video_mock.png'),
        type: 'video',
      },
      {
        src: require('@/assets/img/product_mock.png'),
        type: 'image',
      },
      {
        src: require('@/assets/img/product_mock.png'),
        type: 'image',
      },
    ])
    const activeImageIndex = ref(0)
    const activeImage = computed(() => {
      return images.value[activeImageIndex.value]
    })
    return { images, activeImage, activeImageIndex }
  },
})
</script>

<style lang="postcss">
.product-hero-image {
  @apply md:pb-6 md:border-b md:border-grey-light;
}
</style>