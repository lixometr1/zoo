<template>
  <div class="product-label" :class="{ [type]: true }">
    <slot>{{ text }}</slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
enum ITypes {
  green = 'green',
  yellow = 'yellow',
  red = 'red',
}
export default defineComponent({
  props: {
    text: String,
    type: {
      type: String as () => ITypes,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.product-label {
  @apply flex items-center justify-center 
          text-center text-xs font-bold 
          leading-3
          rounded-full 
          w-14 h-14 p-1 
          md:w-11 md:h-11 md:text-xxs
          select-none;
  &.red {
    @apply bg-red text-white;
  }
  &.yellow {
    @apply bg-yellow text-grey;
  }
  &.green {
    @apply bg-green text-white;
  }
}
</style>