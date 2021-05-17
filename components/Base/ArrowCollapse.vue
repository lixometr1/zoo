<template>
  <div class="arrow-collapse" :class="{ open: isOpen, 'has-more': hasMore }">
    <div
      class="arrow-collapse__wrapper"
      :style="{ maxHeight: height }"
      :class="{ 'blur-down': hasMore }"
    >
      <slot />
    </div>
    <ArrowMore
      v-if="hasMore"
      class="-top-3.5"
      :class="{ '!top-0': isOpen }"
      :open="isOpen"
      @click="toggle"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useOpen from '~/utils/compositions/useOpen'

export default defineComponent({
  props: {
    height: String,
    hasMore: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const { toggle, isOpen, open, close } = useOpen()

    return { open, toggle, isOpen }
  },
})
</script>

<style lang="postcss">
.arrow-collapse {
  &__wrapper {
    @apply relative;
  }
  &.has-more &__wrapper {
    @apply overflow-hidden;
  }
  &.open &__wrapper {
    max-height: none!important;
    &::before {
      @apply hidden;
    }
  }
}
</style>