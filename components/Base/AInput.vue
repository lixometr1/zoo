<template>
  <div class="app-input" :class="{ error: hasErrors, active: isActive }">
    <div class="app-input__inner">
      <div class="app-input__prefix">
        <slot name="prefix"> </slot>
      </div>

      <input
        :id="inputId"
        ref="el"
        v-mask="mask"
        class="app-input__el"
        v-bind="_inputAttrs"
        v-on="_inputListeners"
      />
      <client-only>
        <label v-if="label" class="app-input__label" :for="inputId">
          {{ label }}
          <span v-if="required" class="text-red">*</span>
        </label>
      </client-only>
      <div class="app-input__sufix">
        <slot name="sufix"> </slot>
      </div>
    </div>
    <div v-if="showErrors" class="app-input__errors">
      <div v-for="(error, idx) in errors" :key="idx" class="app-input__error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from '@nuxtjs/composition-api'
import { uid } from 'uid'
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
    required: Boolean,
    mask: String,
  },
  setup(props, { listeners, attrs, emit }) {
    const { inputAttrs, value, label, errors } = toRefs(props)
    const el = ref(null)
    const onInput = (e: any) => {
      const value = e.target.value
      emit('input', value)
    }

    const isActive = ref(false)
    if (value?.value) {
      isActive.value = true
    }
    const onFocus = () => {
      isActive.value = true
    }
    const onBlur = () => {
      if (value?.value) return
      isActive.value = false
    }

    const inputId = ref(uid(11))

    const _inputAttrs = computed(() => {
      return Object.assign(
        {},
        { ...attrs },
        { value: value?.value },
        inputAttrs?.value
      )
    })
    const _inputListeners = computed(() => {
      return Object.assign({}, listeners, {
        input: onInput,
        change: onInput,
        paste: onInput,
        focus: onFocus,
        blur: onBlur,
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
      isActive,
      inputId,
    }
  },
})
</script>

<style lang="postcss">
.app-input {
  position: relative;
  &__el {
    @apply min-w-0 outline-none flex-1 border-none bg-transparent font-medium sm:text-sm;
  }
  &__inner {
    @apply flex-y-center border border-grey-light bg-grey-600 rounded-md
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
  &__sufix {
    @apply ml-3;
  }

  &__label {
    @apply text-base font-medium text-grey select-none text-opacity-50 absolute left-12 top-1/2 transform -translate-y-1/2  
            cursor-text sm:text-sm;
    transition: theme('transitionDuration.DEFAULT');
    &::before {
      content: '';
      @apply absolute top-1/2 -translate-y-1/2 left-0 right-0 bg-white h-[1px] z-[-1];
    }
  }
  &.active {
  }
  &.active &__label {
    @apply top-0 transform -translate-y-1/2 text-xs left-3 px-2;
  }

  &.error {
    .app-input__inner {
      @apply border border-red;
    }
  }
}
</style>