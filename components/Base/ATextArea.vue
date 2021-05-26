<template>
  <div class="app-text-area" :class="{ error: hasErrors }">
    <div class="app-text-area__inner">
      <div class="app-text-area__prefix">
        <slot name="prefix"> </slot>
      </div>

      <textarea
        ref="el"
        class="app-text-area__el"
        v-bind="_inputAttrs"
        v-on="_inputListeners"
      />
    </div>
    <div v-if="showErrors" class="app-text-area__errors">
      <div
        v-for="(error, idx) in errors"
        :key="idx"
        class="app-text-area__error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    inputAttrs: Object,
    label: String,
    errors: {
      type: Array,
      default: () => [],
    },
    value: String,
    showErrors: {
      type: Boolean,
      default: false,
    },
    height: Number,
  },
  setup(props, { listeners, attrs, emit }) {
    const { inputAttrs, value, label, errors } = toRefs(props)
    const el = ref(null)
    const onInput = (e: any) => {
      const value = e.target.value
      emit('input', value)
    }

    const _inputAttrs = computed(() => {
      return Object.assign(
        {},
        { value: value?.value, rows: 3, placeholder: label?.value },
        inputAttrs?.value
      )
    })
    const _inputListeners = computed(() => {
      return Object.assign({}, listeners, {
        input: onInput,
        change: onInput,
        paste: onInput,
      })
    })
    const hasErrors = computed(() => {
      return errors?.value.length > 0
    })

    return {
      el,
      _inputAttrs,
      hasErrors,
      onInput,
      _inputListeners,
    }
  },
})
</script>

<style lang="postcss">
.app-text-area {
  position: relative;
  &__el {
    @apply outline-none flex-1 border-none bg-transparent font-medium sm:text-sm;
  }
  &__inner {
    @apply flex items-start border border-grey-light bg-white rounded-md
            px-5 py-3 h-full;
  }
  &__errors {
    @apply text-red;
    /* min-height: 30px; */
  }
  &__error {
    @apply pt-1.5;
  }
  &__prefix {
    @apply w-7 flex-shrink-0;
  }

  &.error {
    .app-text-area__inner {
      @apply border border-red;
    }
  }
}
</style>