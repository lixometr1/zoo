<template>
  <CustomSelect v-model="valueModel" :items="cities" class="w-[170px] sm:w-auto sm:max-w-[170px]">
    <template #label="{ activeItem, isOpen }">
      <div
        class="font-bold text-grey text-opacity-70 flex-y-center cursor-pointer group hover:text-green transition-all"
      >
        <span>{{ activeItem.name }}</span>
        <svgArrowDown
          width="8"
          class="text-grey text-opacity-50 ml-2 transform transition-all group-hover:text-green"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </template>
  </CustomSelect>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down_triangle.svg?inline'
export default defineComponent({
  components: { svgArrowDown },
  props: {
    value: [String, Number],
  },
  setup(props, { emit }) {
    const cities = computed(() => [
      {
        name: 'Киев',
        value: 'Киев',
      },
      {
        name: 'Харьков',
        value: 'Харьков',
      },
      {
        name: 'Одесса',
        value: 'Одесса',
      },
      {
        name: 'Днипро',
        value: 'Днипро',
      },
      {
        name: 'Запорожье',
        value: 'Запорожье',
      },
      {
        name: 'Львов',
        value: 'Львов',
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
    return { cities, valueModel }
  },
})
</script>

<style lang="postcss">
</style>