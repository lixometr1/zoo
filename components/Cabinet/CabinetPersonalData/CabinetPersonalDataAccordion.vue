<template>
  <div class="border-b border-grey-500">
    <div
      class="flex pb-1 focus:outline-none cursor-pointer transition-opacity"
      :class="{ 'opacity-70': isOpen }"
      tabindex="0"
      @click="toggle"
    >
      <span class="font-bold uppercase sm:text-sm ">{{
        label
      }}</span>
      <svgArrowDown
        class="ml-auto transform transition-all"
        width="8"
        :class="{ 'rotate-180': isOpen }"
      />
    </div>
    <CollapseTransition>
      <div v-if="isOpen" class="pt-3.5">
        <slot />
        <div class="pt-5.5 pb-5 flex-y-center space-x-7 sm:space-x-4">
          <button
            class="font-bold text-grey opacity-50 sm:text-sm flex-y-center focus:outline-none"
            @click.prevent="deny"
          >
            <svgCross width="13" class="mr-2" /> {{ $t('cancel') }}
          </button>
          <button
            class="font-bold text-green sm:text-sm flex-y-center focus:outline-none"
            @click.prevent="approve"
          >
            <svgCheckmark width="14" class="mr-2" /> {{ $t('approve') }}
          </button>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down_triangle.svg?inline'
import { CollapseTransition } from '@ivanv/vue-collapse-transition'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'
import svgCross from '@/assets/icons/cross.svg?inline'
import useOpen from '~/utils/compositions/useOpen'
export default defineComponent({
  components: { svgArrowDown, CollapseTransition, svgCheckmark, svgCross },
  props: {
    label: String,
  },
  setup(props, { emit }) {
    const { isOpen, toggle, close } = useOpen()
    const deny = () => {
      emit('deny', { close })
    }
    const approve = () => {
      emit('approve', { close })
    }
    return {
      approve,
      deny,
      toggle,
      isOpen,
    }
  },
})
</script>

<style lang="postcss">
</style>