<template>
  <div class="relative">
    <a
      href="javascript:void(0)"
      class="flex cursor-pointer items-center"
      @click="toggle"
    >
      <slot name="label" v-bind="{ isOpen, activeItem }">
        <div class="font-bold text-grey border-circle-grey">
          {{ activeItem.name }}
        </div>
        <svgArrowDown
          class="transform transition ml-2 text-grey"
          :class="{ 'rotate-180': isOpen }"
          width="6"
        />
      </slot>
    </a>
    <transition name="t-fade">
      <div
        v-if="isOpen"
        v-click-outside="toggle"
        class="absolute -bottom-1 left-0 right-0 transform translate-y-full bg-white border border-grey-light rounded-md py-1 z-20 overflow-auto max-h-[200px]"
      >
        <a
          v-for="(item, idx) in items"
          :key="idx"
          href="javascript:void(0)"
          class="block cursor-pointer py-1.5 px-3 hover:bg-green hover:text-white "
          @click="selectItem(item.value)"
        >
          {{ item.name }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
interface Item {
  name: string
  value: string | number
}
export default defineComponent({
  components: { svgArrowDown },
  props: {
    items: {
      type: Array as () => Item[],
      default: () => [],
    },
    value: [String, Number],
  },
  setup(props, { emit }) {
    const { items, value } = toRefs(props)
    const isOpen = ref(false)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
    const selectItem = (newValue: string | number) => {
      emit('input', newValue)
      isOpen.value = false
    }
    const activeItem = computed(() => {
      const activeItem = items.value.find(
        (item: Item) => item.value === value?.value
      )
      return activeItem || {}
    })

    return {
      activeItem,
      selectItem,
      toggle,
      isOpen,
    }
  },
})
</script>

<style lang="postcss">
</style>