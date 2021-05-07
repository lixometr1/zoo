<template>
  <router-link
    :to="link || '#'"
    class="offer-card"
    :style="{ backgroundColor: color }"
    :class="{ [`bg-style-${bgType}`]: true }"
  >
    <svgCircle class="offer-card__circle offer-card__circle-1" />
    <svgCircle class="offer-card__circle offer-card__circle-2" />
    <div class="offer-card__content">
      <h2 class="text-white  offer-card__title" v-html="title" v-if="title"></h2>
      <h2 class="offer-card__sale" v-if="sale">{{ sale }}</h2>
      <div class="font-medium mt-2">
        {{ description }}
      </div>
      <button
        :to="link || '#'"
        class="offer-card__btn"
        :style="{ color }"
      >
        {{ btn }}
      </button>
    </div>
    <img class="offer-card__image" :src="image" :alt="title" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgCircle from '@/assets/icons/offer_card_circle.svg?inline'
export default defineComponent({
  components: { svgCircle },

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
        bg-no-repeat bg-cover overflow-hidden relative
        md:px-10 md:py-8 sm:px-5 sm:py-4 sm:min-h-[250px];
  box-shadow: 10px 10px 24px rgba(82, 98, 114, 0.35);
  &__content {
    @apply max-w-[460px] text-white relative z-20 sm:max-w-[300px];
  }
  &__sale {
    @apply text-white text-6xl sm:text-4xl;
  }
  &__image {
    @apply absolute right-0 bottom-0 z-10 max-h-[100%] max-w-[50%];
  }
  &__btn {
    @apply mt-3 inline-block focus:outline-none px-5.5 py-4.5 
    bg-white text-red rounded-md transition font-bold
      hover:shadow-image hover:bg-grey-light 
      sm:px-4 sm:py-3;
  }
  &__circle {
    @apply absolute z-[2] opacity-10;
    z-index: 2;
  }
  &.bg-style-1 &__circle {
    &-1 {
      @apply w-[288px] left-[210px] top-[-144px];
    }
    &-2 {
      @apply w-[520px]  left-[-310px] bottom-[-320px];
    }
  }
  &.bg-style-2 &__circle {
    &-1 {
      @apply w-[228px] right-[200px] top-[-140px];
    }
    &-2 {
      @apply w-[400px] left-[-80px] bottom-[-240px];
    }
  }
}
</style>