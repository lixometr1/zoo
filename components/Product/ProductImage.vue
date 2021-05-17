<template>
  <div class="product-image">
    <img
      class="w-full h-full object-contain cursor-pointer select-none"
      :src="src"
      alt="product-image"
      @click="openModal"
    />
    <VideoIcon v-if="item.type === 'video'" class="product-image__video-icon" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
interface Item {
  src: string
  type: 'image' | 'video'
}
export default defineComponent({
  props: {
    item: {
      type: Object as () => Item,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { item } = toRefs(props)
    const src = computed(() => item.value.src)
    const openModal = () => {
      emit('open')
    }
    return { openModal, src }
  },
})
</script>

<style lang="postcss">
.product-image {
  @apply relative w-full h-full pt-10;
  &__video-icon {
    @apply absolute top-1/2 left-1/2 
    transform -translate-x-1/2 -translate-y-1/2 cursor-pointer;
  }
}
</style>