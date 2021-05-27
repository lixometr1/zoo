<template>
  <div>
    <div class="font-bold mb-3">{{ $t('show') }}</div>
    <ARadioGroup v-model="valueModel" :items="filterItems" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: String,
  },
  setup(props, { emit }) {
    const filterItems = computed(() => [
      {
        label: 'Все',
        value: 'all',
      },
      {
        label: 'По отличию',
        value: 'byDifference',
      },
      {
        label: 'По совпадениям',
        value: 'byHits',
      },
    ])
    const valueModel = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('input', val)
      },
    })
    return { valueModel, filterItems }
  },
})
</script>

<style lang="postcss">
</style>