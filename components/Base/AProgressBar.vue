<template>
  <div class="progress-bar">
    <slot name="before" />
    <div class="progress-bar__line" :class="lineClass">
      <div
        class="progress-bar__active"
        :class="activeClass"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    progress: Number,
    activeClass: [String, Array, Object],
    lineClass: [String, Array, Object],
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.progress-bar {
  @apply flex-y-center;
  &__line {
    @apply flex-1 rounded-full h-1.5 bg-white relative;
  }
  &__active {
    @apply rounded-full bg-yellow h-full;
  }
}
</style>