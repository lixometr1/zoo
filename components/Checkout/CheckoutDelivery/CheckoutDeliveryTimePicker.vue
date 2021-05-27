<template>
  <CustomSelect v-model="valueModel" :items="options" class="w-[180px] sm:text-sm">
    <template #label="{ activeItem, isOpen }">
      <div class="flex-y-center cursor-pointer select-none group ">
        <svgClock width="20" class="text-grey text-opacity-50 group-hover:text-green transition-all" />
        <div
          class="ml-2 border-b-2 border-grey border-opacity-50 border-dotted font-medium group-hover:text-green group-hover:border-green transition-all"
        >
          {{ activeItem.name }}
        </div>
        <svgArrowDown
          width="8"
          class="text-grey opacity-50 ml-3 group-hover:text-green transform transition-all"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </template>
  </CustomSelect>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgClock from '@/assets/icons/clock.svg?inline'
import svgArrowDown from '@/assets/icons/arrow_down_triangle.svg?inline'
export default defineComponent({
  components: { svgClock, svgArrowDown },
  props: {
    value: [String, Number],
  },
  setup(props, { emit }) {
    const options = computed(() => [
      {
        name: 'C 11:00 ДО 12:00',
        value: 1,
      },
      {
        name: 'C 12:00 ДО 13:00',
        value: 2,
      },
      {
        name: 'C 13:00 ДО 14:00',
        value: 3,
      },
      
    ])
    const valueModel = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('input', val)
      },
    })
    return { options, valueModel }
  },
})
</script>

<style lang="postcss">
</style>