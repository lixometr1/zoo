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
      <div class="product-card-variation-images__item-tooltip">
        {{ item.title }}
      </div>
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
          py-3 px-1 rounded-md hover:bg-opacity-20 hover:bg-green transition relative;
    &.active {
      @apply border-green;
    }
    &-tooltip {
      @apply hidden text-center absolute -top-2 transform -translate-y-full border bg-white border-grey-light rounded-sm 
        py-1.5 px-4 
          text-sm font-medium text-grey text-opacity-50;
      box-shadow: 5px 5px 10px rgba(69, 80, 103, 0.15);
      &::before {
        content: '';
        @apply absolute bottom-0 transform translate-y-full left-[20%] w-[18px] h-[20px];
        background: url(~@/assets/icons/tooltip_arrow.svg) center center
          no-repeat;
      }
    }
    &:hover &-tooltip {
      @apply block;
    }
  }
}
</style>