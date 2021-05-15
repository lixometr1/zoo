<template>
  <div class="product-card-variation-images">
    <a
      v-for="(item, idx) in items"
      :key="idx"
      href="javascript:void(0)"
      class="product-card-variation-images__item"
      :class="{ active: item.value === value }"
      @click.prevent="chooseItem(item.value)"
    >
      <img :src="item.image" alt="" />
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
.product-card-variation-images {
  @apply flex flex-wrap;
  &__item {
    @apply mr-1 mb-1 border-grey-light border 
          py-3 px-1 rounded-md hover:bg-opacity-20 hover:bg-green transition;
    &.active {
      @apply border-green;
    }
  }
}
</style>