<template>
  <div class="space-y-2">
    <CabinetOrdersItem v-for="(order, idx) in items" :key="idx" :item="order" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = computed(() => [
      {
        status: 2,
      },
      {
        status: 1,
      },
      {
        status: 0,
      },
    ])
    return { items }
  },
})
</script>

<style lang="postcss">
</style>