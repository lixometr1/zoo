<template>
  <div class="product-card-variation-labels">
    <a
      v-for="(item, idx) in items"
      :key="idx"
      href="javascript:void(0)"
      class="product-card-variation-labels__item"
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
.product-card-variation-labels {
  @apply flex flex-wrap;
  &__item {
    @apply mr-1 mb-1 text-green border-green border 
          py-0.5 px-3 rounded-sm hover:bg-opacity-20 hover:bg-green transition;
    &.active {
      @apply bg-green text-white;
    }
  }
}
</style>