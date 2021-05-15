<template>
  <div class="pb-5 border-b border-grey-light">
    <div class="mb-3">
      <span class="font-bold text-lg"> {{ title }}</span>
      <span class="font-medium text-grey text-opacity-50 ml-2">{{
        activeVariationName
      }}</span>
    </div>
    <div>
      <component
        v-bind="$attrs"
        :is="variationComponent"
        :items="items"
        :value="value"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: String,
    type: String,
    items: {
      type: Array,
      default: () => [] as Array<{ name: string; value: number }>,
    },
    value: [String, Number],
  },
  setup(props) {
    const { type, items, value } = toRefs(props)
    const activeVariation = computed<any>(() => {
      return items.value.find((item: any) => item.value === value?.value)
    })
    const activeVariationName = computed(() => {
      return activeVariation.value?.title
    })
    const variationComponent = computed(() => {
      if (type?.value === 'values') {
        return 'ProductVariationLabels'
      } else if (type?.value === 'images') {
        return 'ProductVariationImages'
      }
    })
    return { variationComponent, activeVariationName }
  },
})
</script>

<style lang="postcss">
</style>