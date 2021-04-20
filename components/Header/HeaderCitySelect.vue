<template>
  <div class="relative">
    <a
      href="javascript:void(0)"
      class="flex cursor-pointer items-center transform translate-y-0.5"
      @click="toggle"
    >
      <div class="font-bold text-grey border-circle-grey">
        {{ activeCity }}
      </div>
      <svgArrowDown
        class="transform transition ml-2 text-grey"
        :class="{ 'rotate-180': isOpen }"
        width="6"
      />
    </a>
    <transition>
      <div
        v-if="isOpen"
        class="absolute top-8 left-0 bg-white border border-grey-light rounded-md p-3"
      >
        <a
          v-for="(city, idx) in cities"
          :key="idx"
          href="javascript:void(0)"
          class="cursor-pointer hover:text-green"
          @click="selectCity(city)"
        >
          {{ city.name }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
export default defineComponent({
  components: { svgArrowDown },
  setup() {
    interface City {
      name: string
    }
    const cities = ref<City[]>([
      {
        name: 'Киев',
      },
      {
        name: 'Харьков',
      },
    ])
    const activeCity = ref(cities.value[0].name)
    const isOpen = ref(false)
    const toggle = () => {
      isOpen.value = !isOpen.value
    }
    const selectCity = (city: City) => {
      activeCity.value = city.name
      isOpen.value = false
    }

    return {
      selectCity,
      toggle,
      cities,
      activeCity,
      isOpen,
    }
  },
})
</script>

<style lang="postcss">
</style>