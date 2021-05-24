<template>
  <div class="flex-y-center ">
    <BlogFiltersSearch class="flex-1 mr-11 lg:mr-8 md:mr-0"/>
    <BlogFiltersSort class="md:hidden" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>