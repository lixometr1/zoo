<template>
  <div class="product-variation-labels">
    <a
      v-for="(item, idx) in items"
      :key="idx"
      href="javascript:void(0)"
      class="product-variation-labels__item"
      :class="{ active: item.value === value }"
      @click.prevent="chooseItem(item.value)"
    >
      {{ item.title }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: [String, Number],
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    const chooseItem = (value: string) => {
      emit('input', value)
    }
    return { chooseItem }
  },
})
</script>

<style lang="postcss">
.product-variation-labels {
  @apply flex flex-wrap;
  &__item {
    @apply mr-1 mb-1 font-bold text-sm border-grey border-opacity-30 border 
          py-2.5 px-6 rounded-full hover:bg-opacity-20 hover:bg-green hover:border-green transition
          sm:text-xs sm:px-4 sm:py-2.5;
    &.active {
      @apply bg-green text-white border-green;
    }
  }
}
</style>