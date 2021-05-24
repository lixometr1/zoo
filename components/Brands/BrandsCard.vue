<template>
  <NuxtLink :to="link" class="brands-card">
    <img :src="image" alt="" />
  </NuxtLink>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const image = computed(() => props.item.image)
    const link = computed(() => '#')
    return { image, link }
  },
})
</script>

<style lang="postcss">
.brands-card {
  @apply h-[160px] md:h-[140px] sm:h-[120px] xs:h-[78px] bg-white rounded-xl sm:rounded-lg py-8 px-5 sm:p-5 flex-center hover:shadow-none transition-all;
  box-shadow: 5px 5px 24px rgba(82, 98, 114, 0.15);
  img {
    @apply max-w-full max-h-full;
  }
}
</style>