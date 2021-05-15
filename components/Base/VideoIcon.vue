<template>
  <div class="video-icon">
    <svgPlay width="10" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgPlay from '@/assets/icons/play.svg?inline'

export default defineComponent({
  components: { svgPlay },

  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.video-icon {
  @apply text-green w-14 h-14 rounded-full flex-center
    transition;
  box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.05),
    5px 5px 20px rgba(0, 0, 0, 0.1), inset -3px -3px 15px #ffffff,
    inset 3px 3px 15px rgba(0, 0, 0, 0.15);
  background: linear-gradient(0deg, #f8f8f8, #f8f8f8), #ffffff;
  border: 3px solid #ffffff;
  &:hover {
    @apply text-white shadow-none border-none;
    background: theme('colors.green.DEFAULT');
  }
}
</style>