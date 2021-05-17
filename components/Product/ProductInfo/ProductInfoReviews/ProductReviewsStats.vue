<template>
  <div class="space-y-1">
    <AProgressBar
      v-for="(item, idx) in items"
      :key="idx"
      :progress="item.progress"
      class="font-bold text-sm text-opacity-50 text-grey product-reviews-progress-bar sm:text-xs"
    >
      <template #before>
        <div class="flex-y-center mr-3.5">
          <StarHandler class="w-4.5 text-yellow mr-2 sm:w-4" :active="true" />
          <span class="">{{ 5 - idx }}</span>
        </div>
      </template>
      <template #after>
        <div class="ml-2">{{ item.cnt }}</div>
      </template>
    </AProgressBar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        progress: 80,
        cnt: 124,
      },
      {
        progress: 40,
        cnt: 8,
      },
      {
        progress: 23,
        cnt: 3,
      },
      {
        progress: 50,
        cnt: 1,
      },
      {
        progress: 10,
        cnt: 3,
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
.product-reviews-progress-bar {
  .progress-bar {
    &__line {
      @apply h-1.5 bg-white flex w-[200px] max-w-[200px] border border-grey-light
            xs:w-[140px] xs:max-w-[140px];
      box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.15);
    }
    &__active {
      @apply bg-yellow h-1.5;
      margin: -1px 0 -1px -1px;
      
    }
  }
}
</style>