<template>
  <div @mouseleave.self="onMouseOut">
    <CatalogModalMenu v-model="selectedItem" class="bg-transparent md:hidden" />

    <div class="pl-5  absolute top-0 left-[300px] z-10 bottom-0 md:hidden">
      <CatalogModalItems class="max-h-full" v-if="selectedItem"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const selectedItem = ref('')
    const onMouseOut = () => {
      selectedItem.value = ''
    }
    return {
      onMouseOut,
      selectedItem,
    }
  },
})
</script>

<style lang="postcss">
</style>