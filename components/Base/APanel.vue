<template>
  <transition name="t-panel">
    <div v-if="isOpen" class="app-panel">
      <div class="app-panel__content" :class="contentClass">
        <slot />
      </div>
      <div class="app-panel__overlay" @click="close"></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    contentClass: [String, Array, Object],
    isOpen: Boolean,
  },
  setup(props, { emit }) {
    const close = () => {
      emit('close')
    }
    return { close }
  },
})
</script>

<style lang="postcss">
.app-panel {
  @apply fixed top-0 left-0 right-0 bottom-0 max-h-full z-50;
  &__overlay {
    @apply bg-grey bg-opacity-20 absolute top-0 left-0 right-0 bottom-0 z-10;
  }
  &__content {
    @apply z-20;
  }
}
.t-panel-enter,
.t-panel-leave-to {
  .app-panel__content {
    transform: translateX(-100%);
  }
  .app-panel__overlay {
    opacity: 0;
  }
}
.t-panel-leave-active,
.t-panel-enter-active {
  transition: 0.3s;

  .app-panel__content {
    transition: 0.3s;
  }
  .app-panel__overlay {
    transition: 0.3s;
  }
}
</style>