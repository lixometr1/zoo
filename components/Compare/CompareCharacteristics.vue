<template>
  <div class="md:w-[180px] sm:w-[140px] ">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="font-bold pb-3 pt-5.5 border-b border-grey-500 text-grey pr-4 md:pr-2 overflow-hidden overflow-ellipsis whitespace-nowrap"
    >
      <span > {{ item.title }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = computed(() => [
      {
        title: 'Характеристика adasdad asdassasds asdss',
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