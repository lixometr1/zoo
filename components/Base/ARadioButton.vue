<template>
  <div
    href="javascript:void(0)"
    class="app-radio-button"
    :class="{ active: value }"
    v-on="$listeners"
  >
    <div class="app-radio-button__el"></div>
    <div class="app-radio-button__label">
      <slot name="label">{{ label }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: Boolean,
    label: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.app-radio-button {
  @apply flex-y-center;
  &__el {
    @apply w-4.5 h-4.5 border-2 rounded-full flex-center cursor-pointer;
    border-color: #d4d4d4;
    &::before {
      content: '';
      @apply block w-2 h-2 bg-green opacity-0 rounded-full transition-all;
    }
  }
  &__label {
    @apply ml-2 text-lg sm:text-xs font-medium cursor-pointer;
  }
  &.active & {
    &__el {
      @apply border-green;
      &::before {
        @apply opacity-100;
      }
    }
  }
}
</style>