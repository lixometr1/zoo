<template>
  <div class="pb-3 border-b border-grey border-opacity-20">
    <div class="font-medium mb-3">
      {{ title }}
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
      default: () => [],
    },
    value: [String, Number],
  },
  setup(props) {
    const { type } = toRefs(props)
    const variationComponent = computed(() => {
      if (type?.value === 'values') {
        return 'ProductCardVariationLabels'
      } else if (type?.value === 'images') {
        return 'ProductCardVariationImages'
      }
    })
    return { variationComponent }
  },
})
</script>

<style lang="postcss">
</style>