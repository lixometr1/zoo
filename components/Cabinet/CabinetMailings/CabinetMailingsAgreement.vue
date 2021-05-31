<template>
  <ACheckboxInput v-bind="$attrs" class="!items-start" v-on="$listeners">
    <template #label>
      <div
        class="font-bold text-lg -mt-1.5 uppercase md:text-base sm:text-sm sm:-mt-0.5"
      >
        {{ title }}
      </div>
      <div class="font-medium opacity-70 sm:text-xs">
        {{ description }}
      </div>
    </template>
  </ACheckboxInput>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: String,
    description: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>