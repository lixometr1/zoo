<template>
  <div>
    <a
      href="javascript:void(0)"
      class="flex-y-center justify-between pb-4 border-b border-opacity-30 border-grey"
      @click="toggle"
    >
      <div class="font-bold text-lg">{{ title }}</div>
      <svgArrowDown
        width="14"
        class="text-grey transform transition"
        :class="{ 'rotate-180 opacity-50': isOpen }"
      />
    </a>
    <CollapseTransition>
      <div v-if="isOpen">
        <div class="pt-4 5">
          <slot />
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
import { CollapseTransition } from '@ivanv/vue-collapse-transition'
export default defineComponent({
  components: { svgArrowDown, CollapseTransition },
  props: {
    title: String,
    open: Boolean,
  },
  setup(props) {
    const { open } = toRefs(props)
    const isOpen = ref(!!open?.value)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
    return { isOpen, toggle }
  },
})
</script>

<style lang="postcss">
</style>