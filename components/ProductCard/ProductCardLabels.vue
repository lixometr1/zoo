<template>
  <div class="flex flex-col absolute right-3 top-5 space-y-1.5">
    <ProductLabel
      v-for="(label, idx) in items"
      :key="idx"
      :text="label.name"
      :type="label.type"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    active: {
      type: Array,
      default: () => [],
    },
    topSale: Boolean,
    isPopular: Boolean,
  },
  setup(props) {
    const { topSale, isPopular } = toRefs(props)
    const items = computed(() => {
      const labels = [
        {
          name: 'Хит продаж',
          type: 'yellow',
          is: 'topSale',
        },
        {
          name: 'Товар дня',
          type: 'red',
          is: 'popular',
        },
      ]

      return labels.filter((label) => {
        if (label.is === 'popular' && isPopular?.value) return true
        if (label.is === 'topSale' && topSale?.value) return true
        return false
      })
    })
    return { items }
  },
})
</script>

<style lang="postcss">
</style>