<template>
  <a
    href="javascript:void(0)"
    class="inline-flex items-center mb-5 text-grey text-opacity-50 md:mb-3 hover:text-opacity-100 transition-colors"
    v-on="$listeners"
  >
    <svgArrowLeft class="mr-2" width="16" />
    <div class="text-sm sm:text-xs uppercase font-medium xs:hidden">{{ title }}</div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowLeft from '@/assets/icons/arrow_long_left.svg?inline'

export default defineComponent({
  components: { svgArrowLeft },
  props: {
    title: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>