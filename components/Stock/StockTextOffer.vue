<template>
  <div>
    <div class="stock-offer-text">
      <OfferCard tag="div" v-bind="offer" class="stock-offer-text__offer" />
      <div class="stock-offer-text__content">
        <div class="font-bold text-grey text-opacity-50 mb-1">
          {{ item.date }}
        </div>
        <h4 class="sm:leading-4" v-html="item.title"></h4>
        <div class="font-medium mt-2 sm:mt-1.5">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    offer: {
      type: Object,
      default: () => ({}),
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.stock-offer-text {
  @apply flex-y-center sm:flex-col sm:items-stretch;
  &__offer {
    @apply w-[470px] flex-shrink-0 md:w-[350px] sm:w-full sm:mb-4;
  }
  &__content {
    @apply pl-20 xl:pl-16 lg:pl-10 sm:pl-0;
  }
}
</style>