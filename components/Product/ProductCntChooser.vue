<template>
  <div class="product-card-cnt">
    <a
      v-for="(item, idx) in items"
      :key="idx"
      href="javascript:void(0)"
      class="product-card-cnt__item"
      :class="{ active: value === item.value }"
      @click.prevent="chooseItem(item.value)"
    >
      {{ item.name }} {{ $t('itemPiece') }}.
      <span v-if="item.sale" class="product-card-cnt__item-sale"
        >-{{ item.sale }}%</span
      >
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: Number,
  },
  setup(props, { emit }) {
    const items = [
      {
        name: '1',
        value: 1,
      },
      {
        name: '24',
        sale: 28,
        value: 24,
      },
    ]
    const chooseItem = (newValue: number) => {
      emit('input', newValue)
    }
    return { items, chooseItem }
  },
})
</script>

<style lang="postcss">
.product-card-cnt {
  @apply flex border border-opacity-50 rounded-full 
        h-[26px] text-sm w-full;
  border-color: #d0d0d0;

  &__item {
    @apply flex-1 font-medium flex-center text-center rounded-full m-[-1px]
        border border-transparent transition
        hover:text-green hover:border-green hover:bg-green hover:bg-opacity-20;
    &-sale {
      @apply text-green font-bold ml-1;
    }
    &.active {
      @apply text-white bg-green bg-opacity-100 border-green;
    }
    &.active &-sale {
      @apply text-white;
    }
  }
}
</style>