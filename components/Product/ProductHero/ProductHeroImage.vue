<template>
  <div class="product-hero-image">
    <ProductLabels
      class="absolute left-[120px] top-0 space-x-2 z-20 md:flex-col md:space-x-0 md:space-y-1.5 md:left-0"
      :popular="true"
      :topSale="true"
    />
    <ProductFeaturesBtn
      class="hidden md:flex absolute right-0 top-0 flex-col space-x-0 space-y-4 z-20 sm:w-7"
    />
    <div class="md:hidden flex items-start h-[425px]">
      <ProductThumbSlider
        v-model="activeImageIndex"
        class="w-[100px] h-full"
        :items="images"
      />
      <ProductImage
        class="ml-3 h-full flex-1"
        :item="activeImage"
        @open="openModal(activeImageIndex)"
      />
    </div>
    <div class="hidden md:block">
      <ProductImagesSlider :items="images" @open="openModal" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { ModalName } from '~/types/modal.enum'
import useModal from '~/utils/compositions/useModal'

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
    const openModal = (startIndex: number) => {
      const { showByName } = useModal()
      showByName(ModalName.productImages, {
        props: {
          startIndex,
          items: images.value
        }
      })
    }
    return { images, activeImage, activeImageIndex, openModal }
  },
})
</script>

<style lang="postcss">
.product-hero-image {
  @apply md:pb-6 md:border-b md:border-grey-light;
}
</style>