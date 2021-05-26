<template>
  <div class="app-checkbox-input">
    <ACheckbox :value="value" tabindex="0" @click="toggle" />
    <span class="app-checkbox-input__label" @click="toggle">
      <slot name="label">
        {{ label }}
      </slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: Boolean,
    label: String,
  },
  setup(props, { emit }) {
    const toggle = () => {
      emit('input', !props.value)
    }
    return { toggle }
  },
})
</script>

<style lang="postcss">
.app-checkbox-input {
  @apply flex-y-center;
  &__label {
    @apply ml-2 text-lg select-none cursor-pointer font-medium sm:text-sm xs:text-xs;
  }
}
</style>