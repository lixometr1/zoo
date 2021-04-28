<template>
  <div class="border-r border-grey border-opacity-30 pr-9 lg:border-none">
    <div
      class="text-lg font-bold mb-2.5 text-opacity-50 text-grey flex-shrink-0"
    >
      {{ $t('popularCategories') }}
    </div>
    <div class="space-y-0.5">
      <router-link
        to="#"
        class="block text-opacity-70 text-grey hover:text-green"
        v-for="(popularCategory, idx) in popularCategories"
        :key="idx"
      >
        {{ popularCategory.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const popularCategories = computed(() => [
      {
        name: ' Сухой корм для собак',
      },
      {
        name: ' Сухой корм для собак',
      },
      {
        name: ' Сухой корм для собак',
      },
      {
        name: ' Сухой корм для собак',
      },
      {
        name: ' Сухой корм для собак',
      },
      {
        name: ' Сухой корм для собак',
      },
      {
        name: ' Сухой корм для собак',
      },
      {
        name: ' Сухой корм для собак',
      },
    ])
    return { popularCategories }
  },
})
</script>

<style lang="postcss">
</style>