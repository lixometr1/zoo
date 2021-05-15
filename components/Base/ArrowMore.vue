<template>
  <div class="arrow-more" :class="{ open }" v-on="$listeners">
    <svgDoubleArrowDown width="11" class="transform transition" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgDoubleArrowDown from '@/assets/icons/double_arrow_down.svg?inline'

export default defineComponent({
  components: { svgDoubleArrowDown },
  props: {
    open: Boolean,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.arrow-more {
  @apply w-14 h-14 border-2 border-white rounded-full items-center justify-center
    bg-green cursor-pointer hover:bg-green-700 transition text-white 
   flex mx-auto -mt-3 z-20 relative;
  &.open {
    @apply !mt-2;
    svg {
      @apply rotate-180;
    }
  }
}
</style>