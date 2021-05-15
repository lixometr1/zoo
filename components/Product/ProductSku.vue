<template>
  <div class="font-medium">
    <span class="text-grey text-opacity-50">{{ $t('sku') }}:</span>
    <span>{{ value }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>