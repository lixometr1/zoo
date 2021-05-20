<template>
  <NuxtLink
    :to="link || '#'"
    class="offer-card"
    :class="{ [`bg-style-${bgType}`]: true }"
  >
    <OfferCardBg :type="bgType" :color="color" />
    <div class="offer-card__content">
      <div v-if="brand" class="offer-card__brand">
        <img :src="brand" alt="" />
      </div>
      <h2 v-if="title" v-html="title" class="offer-card__title"></h2>
      <h2 v-if="sale" class="offer-card__sale">{{ sale }}</h2>
      <div v-if="description" class="offer-card__description font-medium mt-2">
        {{ description }}
      </div>
      <button v-if="btn" class="offer-card__btn" :style="{ color }">
        {{ btn }}
      </button>
      <slot name="content" />
    </div>
    <img class="offer-card__image" :src="image" :alt="title" />
    <slot name="other" />
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  inheritAttrs: false,
  props: {
    title: String,
    description: String,
    btn: String,
    link: [String, Object],
    image: String,
    color: String,
    logo: String,
    sale: String,
    brand: String,
    bgType: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.offer-card {
  @apply min-h-[320px] rounded-lg flex-y-center px-14 py-10 text-white
        overflow-hidden relative
        md:px-10 md:py-8 sm:px-5 sm:py-4 sm:min-h-[250px];
  box-shadow: 0px 10px 24px rgba(82, 98, 114, 0.35);
  &__content {
    @apply max-w-[70%] relative z-20 sm:max-w-[200px];
    color: inherit;
  }
  &__sale {
    @apply text-6xl sm:text-4xl;
    color: inherit;
  }
  &__title {
    color: inherit;
  }
  &__image {
    @apply absolute right-0 top-1/2 transform -translate-y-1/2 
          z-10 max-h-[100%] max-w-[50%] lg:max-w-[70%] md:max-w-[50%] sm:max-w-[80%];
  }
  &__brand {
    @apply max-w-[80px] mb-5;
  }
  &__btn {
    @apply mt-3 inline-block focus:outline-none px-5.5 py-4.5 
    bg-white text-red rounded-md transition font-bold
      hover:shadow-image hover:bg-grey-light 
      sm:px-4 sm:py-3;
  }
  &.bg-style-0 {
    @apply text-grey;
  }
  &.bg-style-0 &__sale {
    @apply text-green;
  }
}
</style>