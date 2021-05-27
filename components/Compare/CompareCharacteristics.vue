<template>
  <div>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="font-bold pb-3 pt-5.5 border-b border-grey-500 text-grey"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = computed(() => [
      {
        title: 'Характеристика',
      },
      {
        title: 'Характеристика',
      },
      {
        title: 'Характеристика',
      },
      {
        title: 'Характеристика',
      },
      {
        title: 'Характеристика',
      },
      {
        title: 'Характеристика',
      },
    ])
    return { items }
  },
})
</script>

<style lang="postcss">
</style>