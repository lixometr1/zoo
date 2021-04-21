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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        name: 'Хит продаж',
        type: 'yellow',
      },
      {
        name: 'Товар дня',
        type: 'red',
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
</style>