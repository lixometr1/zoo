<template>
  <div
    class="border border-grey-light rounded-xl p-7 flex items-start bg-white md:flex-col md:items-stretch md:no-gutter relative"
    sticky-container
  > 
    <div class="flex-1 mr-3 h-full relative">
      <ProductHeroImage
        v-sticky="shouldStick"
        sticky-side="0"
        sticky-offset="{top: 30, bottom: 30}"
      />
    </div>
    <div class="flex-1">
      <ProductHeroInfo class="md:pt-7" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { Breakpoints } from '~/types/constants'
import useResize from '~/utils/compositions/useResize'
export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const shouldStick = ref(false)
    useResize((wWidth) => {
      if (wWidth < Breakpoints.md) {
        shouldStick.value = false
      } else {
        shouldStick.value = true
      }
    })
    return { shouldStick }
  },
})
</script>

<style lang="postcss">
</style>