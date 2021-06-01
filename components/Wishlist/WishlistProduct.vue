<template>
  <div class="relative transition-opacity">
    <ProductCard
      :showLabels="false"
      :hoverCollapse="false"
      :showBtn="false"
      v-bind="$attrs"
      class="!rounded-none !border-l-0 !border-t-0"
      v-on="$listeners"
    />
    <ACheckbox
      class="absolute right-3 top-5 select-none"
      :value="value"
      @click="$emit('input', !value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: Boolean,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>