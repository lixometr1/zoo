<template>
  <div class="product-info-accordion" :class="{ open: isOpen }">
    <div class="product-info-accordion__header" @click="toggle">
      <span>{{ title }}</span>
      <svgArrowDown width="12" />
    </div>
    <CollapseTransition collapse-leave-to="!opacity-0">
      <div v-if="isOpen" class="product-info-accordion__content">
        <slot />
      </div>
    </CollapseTransition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { CollapseTransition } from '@ivanv/vue-collapse-transition'

import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
import useOpen from '~/utils/compositions/useOpen'

export default defineComponent({
  components: { svgArrowDown, CollapseTransition },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: String,
  },
  setup(props, { emit }) {
    const isOpen = computed(() => props.value)
    const toggle = () => {
      emit('input', !isOpen.value)
    }

    return { isOpen, toggle }
  },
})
</script>

<style lang="postcss">
.product-info-accordion {
  &__header {
    @apply text-base font-semibold flex justify-between transition-all border-b border-grey border-opacity-30 py-2.5
            cursor-pointer select-none;
    svg {
      @apply text-grey opacity-50 transform transition-all;
    }
  }
  &__content {
    @apply border-b border-grey border-opacity-30 pb-7 pt-5.5;
  }
  &.open &__header {
    @apply border-b-4 border-green text-green;
    svg {
      @apply opacity-100 rotate-180;
    }
  }
}
</style>