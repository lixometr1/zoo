<template>
  <div class="space-y-4">
    <ProductCardVariation
      v-for="(item, idx) in items"
      :key="idx"
      :items="item.items"
      :type="item.type"
      :title="item.title"
      :value="value[item.id]"
      @input="onChangeVariation($event, item)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props)
    const onChangeVariation = (newValue: string, item: any) => {
      const newValues = { ...value.value }
      newValues[item.id] = newValue
      emit('input', newValues)
    }
    return { onChangeVariation }
  },
})
</script>

<style lang="postcss">
</style>