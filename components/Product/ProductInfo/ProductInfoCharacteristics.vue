<template>
  <div class="product-characteristics flex sm:flex-col">
    <div class="flex-1 mr-14 space-y-3 sm:mr-0 sm:mb-4">
      <div v-for="(item, idx) in col1" :key="idx" class="flex items-baseline text-grey text-opacity-80">
        <div>
          {{ item.name }}
        </div>
        <div class="flex-1 border-b border-grey border-opacity-30 mx-2"></div>
        <div class="font-bold">
          {{ item.value }}
        </div>
      </div>
    </div>
    <div class="flex-1 space-y-3">
      <div v-for="(item, idx) in col2" :key="idx" class="flex items-baseline text-grey text-opacity-80">
        <div>
          {{ item.name }}
        </div>
        <div class="flex-1 border-b border-grey border-opacity-30 mx-2"></div>
        <div class="font-bold">
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const col1 = [
      {
        name: 'Характеристика',
        value: 'Значение',
      },
      {
        name: 'Характеристика',
        value: 'Значение',
      },
      {
        name: 'Характеристика',
        value: 'Значение',
      },
      {
        name: 'Характеристика',
        value: 'Значение',
      },
      {
        name: 'Характеристика',
        value: 'Значение',
      },
    ]
    const col2 = col1
    return { col1, col2 }
  },
})
</script>

<style lang="postcss">
.product-characteristics {
}
</style>