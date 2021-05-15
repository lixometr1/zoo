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
import {
  computed,
  defineComponent,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'
import { ProductLabels } from '@/types/constants'
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

    const labels = computed(() => {
      return ProductLabels.map((label) => {
        const name = useContext().i18n.t(`productLabels.${label.is}`)
        return {
          ...label,
          name,
        }
      })
    })
    const items = computed(() => {
      return labels.value.filter((label) => {
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