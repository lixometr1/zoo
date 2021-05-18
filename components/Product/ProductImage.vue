<template>
  <div class="product-image" @click="openModal">
    <div class=" flex-center relative h-full w-full">
      <img
        class="max-w-full max-h-full object-contain"
        :src="src"
        alt="product-image"
      />
      <VideoIcon
        v-if="item.type === 'video'"
        class="product-image__video-icon"
      />
    </div>
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
  @apply w-full h-full pt-10 cursor-pointer select-none;
  &__video-icon {
    @apply absolute top-1/2 left-1/2 
    transform -translate-x-1/2 -translate-y-1/2 cursor-pointer;
  }
}
</style>