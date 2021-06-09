<template>
  <div
    class="
      border border-grey-light
      rounded-xl
      p-7
      flex
      items-start
      bg-white
      md:flex-col
      md:items-stretch
      relative
    "
    :class="{ 'md:no-gutter': mode !== 'modal' }"
    sticky-container
  >
    <div class="flex-1 mr-3 h-full relative">
      <ProductHeroImage
        v-sticky="shouldStick"
        sticky-side="0"
        sticky-offset="stickyOffset"
      />
    </div>
    <div class="flex-1">
      <ProductHeroInfo class="md:pt-7" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  provide,
  ref,
  toRefs,
} from '@nuxtjs/composition-api'
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

    const { value: stickyOffset } = useResizeValue(() => {
      let top = 30
      if (process.client) {
        top = window.innerHeight / 2 - 212
      }
      console.log(top)
      return { top, bottom: 30 }
    })
    return { shouldStick, stickyOffset }
  },
})
</script>

<style lang="postcss">
</style>