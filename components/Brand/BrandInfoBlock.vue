<template>
  <div
    class="stock-info-block my-7 sm:no-gutter"
    :class="{ [`type-${type}`]: true, [`image-out`]: imageOut }"
  >
    <div class="stock-info-block__content-wrapper">
      <div class="stock-info-block__content">
        <h2 class="leading-10 md:leading-8 sm:leading-6" v-html="title"></h2>
        <div class="font-medium text-grey text-opacity-80 mt-2">
          {{ description }}
        </div>
        <div class="mt-2">
          <NuxtLink
            :to="link || '#'"
            class="text-blue flex-y-center group transition-all hover:text-green"
          >
            <span
              class="border-b-2 border-blue border-dotted border-opacity-50 group-hover:border-green transition-all"
              >{{ $t('watchAll') }}</span
            >
            <svgArrowRight width="58" class="ml-2" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="stock-info-block__image">
      <img :src="image" alt="image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_long_right.svg?inline'
export default defineComponent({
  components: { svgArrowRight },
  props: {
    type: {
      type: Number,
      default: 1,
    },
    imageOut: {
      type: Boolean,
      default: false,
    },
    image: String,
    title: String,
    description: String,
    link: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.stock-info-block {
  @apply min-h-[340px] flex items-stretch bg-white border border-grey-light rounded-xl
        sm:flex-col sm:rounded-none sm:min-h-0;
  &__content-wrapper {
    @apply flex-1 flex flex-col justify-center items-stretch py-3
    px-20 sm:order-2
    sm:pt-0 sm:justify-start sm:px-5.5 sm:pb-10;
  }
  &__content {
    @apply max-w-[460px] sm:max-w-none;
  }
  &__image {
    @apply flex-1 overflow-hidden relative rounded-tr-xl rounded-br-xl
         sm:rounded-none;
    img {
      @apply absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover;
    }
  }
  &.type-1 {
  }
  &.type-1 &__content {

  }
  &.type-1 &__image {
    @apply sm:min-h-[200px] sm:mb-3 flex-shrink-0;
  }

  &.type-2 {
    @apply flex-row-reverse
      sm:flex-col;
  }
  &.type-2 &__content-wrapper {
    @apply items-center;
  }
  &.type-2 &__image {
    @apply rounded-tl-xl rounded-tr-xl overflow-visible;
  }
  &.image-out {
    @apply my-14 sm:mt-20 sm:mb-5;
  }
  &.image-out &__image {
    @apply overflow-visible sm:-mt-18;
    img {
      @apply object-contain w-auto h-[440px] top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2
          sm:relative sm:h-auto sm:max-h-[230px] sm:top-0 sm:translate-y-0;
    }
  }
}
</style>
