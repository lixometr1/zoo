<template>
  <div
    class="btn-green w-[300px]"
  >
    <svgBurger width="20" class="mr-4" />
    <div class="font-bold">{{ $t('catalog') }}</div>
    <svgArrowDown
      width="12"
      class="ml-auto transform"
      :class="{ 'rotate-180': isOpen }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
import svgBurger from '@/assets/icons/burger.svg?inline'
export default defineComponent({
  components: { svgArrowDown, svgBurger },
  setup() {
    const isOpen = ref(false)
    return {
      isOpen,
    }
  },
})
</script>

<style lang="postcss">
</style>