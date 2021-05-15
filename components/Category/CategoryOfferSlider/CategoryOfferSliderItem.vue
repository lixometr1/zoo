<template>
  <div class="category-offer-slider-item">
    <div v-if="type === 'image'" class="category-offer-slider-item__image">
      <img :src="image" alt="" class="rounded-lg" />
    </div>
    <OfferCard v-else v-bind="{ ...$attrs, image }" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  inheritAttrs: false,
  props: {
    type: String,
    image: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.category-offer-slider-item {
  @apply px-3;
  &__image {
    img {
      @apply w-full max-h-full max-w-full;
      box-shadow: 10px 10px 24px rgba(82, 98, 114, 0.35);
    }
  }
}
</style>