<template>
  <div class="space-y-1.5">
    <ARadioButton
      v-for="(item, i) in items"
      :key="i"
      :label="item.label"
      :value="value === item.value"
      tabindex="0"
      class="focus:outline-none"
      @click="selectItem(item.value)"
    >
      <template #label>
        <slot name="label" v-bind="{ item, i }" />
      </template>
    </ARadioButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
interface IRadioItem {
  label: string
  value: string
}
export default defineComponent({
  props: {
    items: {
      type: Array as () => IRadioItem[],
      default: () => [],
    },
    value: [String, Number],
  },
  setup(props, { emit }) {
    const selectItem = (newValue: string | number) => {
      emit('input', newValue)
    }
    return { selectItem }
  },
})
</script>

<style lang="postcss">
</style>