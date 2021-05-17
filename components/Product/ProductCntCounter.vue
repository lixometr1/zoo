<template>
  <div
    class="rounded-md bg-white flex items-center justify-between px-4.5 py-4 border border-grey-500"
  >
    <div class="select-none cursor-pointer h-3 flex-center group" @click="minus">
      <svgMinus width="12" class="text-grey opacity-50 group-hover:opacity-100 transition-opacity" />
    </div>
    <div class="text-2lg font-medium sm:text-base">
      {{ value }}
    </div>
    <div class="select-none cursor-pointer h-3 flex-center group" @click="plus">
      <svgPlus width="12" class="text-grey opacity-50 group-hover:opacity-100 transition-opacity" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgMinus from '@/assets/icons/minus.svg?inline'
import svgPlus from '@/assets/icons/plus.svg?inline'
export default defineComponent({
  components: { svgMinus, svgPlus },
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props)
    const plus = () => {
      emit('input', value?.value + 1)
    }
    const minus = () => {
      if (value.value < 2) return
      emit('input', value.value - 1)
    }
    return { minus, plus }
  },
})
</script>

<style lang="postcss">
</style>