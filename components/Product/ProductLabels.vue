<template>
  <div class="flex">
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
    topSale: Boolean,
    popular: Boolean,
    isNew: Boolean,
  },
  setup(props) {
    const { topSale, popular, isNew } = toRefs(props)

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
        if (label.is === 'popular' && popular?.value) return true
        if (label.is === 'topSale' && topSale?.value) return true
        if (label.is === 'new' && isNew?.value) return true
        return false
      })
    })
    return { items }
  },
})
</script>

<style lang="postcss">
</style>