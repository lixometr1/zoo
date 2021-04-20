<template>
  <div class="flex flex-wrap items-center space-x-2">
    <div
      v-for="(tag, idx) in items"
      :key="idx"
      class="catalog-tag mt-2"
      :class="{ active: activeItems.includes(idx) }"
      @click="chooseTag(idx)"
      tabindex="0"
    >
      {{ tag }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      'Для стерилизованных кошек',
      'Для пожилых',
      'Royal Canin',
      'Kitekat',
      'Hills',
      'Pro Plan',
      'Perfect Fit',
      'При чуствительном пищеварении',
      'При аллергии',
      'При болезнях ЖКТ',
    ]
    const activeItems = ref([0])
    const chooseTag = (idx: number) => {
      if (activeItems.value.includes(idx)) {
        activeItems.value = activeItems.value.filter(
          (item: number) => item !== idx
        )
      } else {
        activeItems.value.push(idx)
      }
    }
    return { items, activeItems, chooseTag }
  },
})
</script>

<style lang="postcss">
.catalog-tag {
  @apply px-5.5 py-3 text-grey rounded-full border border-grey-light bg-white leading-5 cursor-pointer hover:text-white hover:bg-green transition;
  &.active {
    @apply bg-green text-white;
  }
}
</style>