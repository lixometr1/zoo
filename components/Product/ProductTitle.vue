<template>
  <div>
    <h1 class="text-3xl sm:text-2xl xs:text-lg font-bold">{{ value }}</h1>
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