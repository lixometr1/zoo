<template>
  <div
    class="offer-card-bg"
    
    :style="{ backgroundColor: color }"
  >
    <svgCircle class="offer-card-bg__circle offer-card-bg__circle-1" />
    <svgCircle class="offer-card-bg__circle offer-card-bg__circle-2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgCircle from '@/assets/icons/offer_card_circle.svg?inline'

export default defineComponent({
  components: { svgCircle },
  props: {
    type: Number,
    color: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.offer-card-bg {
  @apply absolute top-0 left-0 right-0 bottom-0;
  box-shadow: inset 0 0 5px 2px rgba(255,255,255, 0.3);
  &__circle {
    @apply absolute z-[2] opacity-10;
    z-index: 2;
  }
  .bg-style-0 &__circle {
    @apply hidden;
  }
  .bg-style-1 &__circle {
    &-1 {
      @apply w-[288px] left-[210px] top-[-160px] sm:w-[150px] sm:left-[150px] sm:top-[-75px];
    }
    &-2 {
      @apply w-[520px]  left-[-310px] bottom-[-320px] sm:left-[-50px] sm:w-[300px] sm:bottom-[-180px];
    }
  }
  .bg-style-2 &__circle {
    &-1 {
      @apply w-[228px] right-[200px] top-[-140px] sm:w-[180px] sm:right-[150px] sm:top-[-100px];
    }
    &-2 {
      @apply w-[400px] left-[-80px] bottom-[-240px] sm:w-[250px] sm:bottom-[-130px];
    }
  }
}
</style>