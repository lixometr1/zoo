<template>
  <div class="flex max-h-full">
    <CatalogModalMenu v-model="activeItem" class="mr-2" />
    <CatalogModalItems />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const activeItem = ref('')
    return { activeItem }
  },
})
</script>

<style lang="postcss">
</style>