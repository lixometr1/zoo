<template>
  <div
    class="border border-grey-light rounded-xl p-7 flex items-start bg-white md:flex-col md:items-stretch relative"
    :class="{ 'md:no-gutter': mode !== 'modal' }"
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
import { defineComponent, provide, ref, toRefs } from '@nuxtjs/composition-api'
import { Breakpoints } from '~/types/constants'
import useResize from '~/utils/compositions/useResize'
import useResizeValue from '~/utils/compositions/useResizeValue'
export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    mode: {
      type: String,
      // product/modal
      default: 'product',
      validator: (val: string) => ['modal', 'product'].includes(val),
    },
  },
  setup(props) {
    const { mode } = toRefs(props)
    provide('mode', mode)
    const { value: shouldStick } = useResizeValue((wWidth) => {
      if (props.mode === 'modal') return false
      return wWidth >= Breakpoints.md
    })
    return { shouldStick }
  },
})
</script>

<style lang="postcss">
</style>