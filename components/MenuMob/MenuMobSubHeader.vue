<template>
  <div class="flex justify-between text-grey">
    <svgArrowLeft width="20" class="cursor-pointer" @click="goBack" />
    <div class="font-bold text-base">
      {{ title }}
    </div>
    <svgCross width="16" class="cursor-pointer" @click="goBack" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgCross from '@/assets/icons/cross_thin.svg?inline'
import svgArrowLeft from '@/assets/icons/arrow_long_left.svg?inline'
export default defineComponent({
  components: { svgCross, svgArrowLeft },
  props: {
    title: String,
  },
  setup(props, { emit }) {
    const goBack = () => {
      emit('back')
    }
    return { goBack }
  },
})
</script>

<style lang="postcss">
</style>