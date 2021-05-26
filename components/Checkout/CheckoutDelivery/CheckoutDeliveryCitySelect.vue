<template>
  <div>
    <div
      class="font-bold text-grey text-opacity-70 flex-y-center cursor-pointer"
    >
      Киев <svgArrowDown width="8" class="text-grey opacity-50 ml-2" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down_triangle.svg?inline'
export default defineComponent({
  components: { svgArrowDown },
  props: {
    value: [String, Number],
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>