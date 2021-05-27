<template>
  <div class="pb-3.5 border-b border-grey-light">
    <div class="flex text-base">
      <span class="font-medium opacity-50">{{ $t('yourCity') }}:</span>
      <div class="ml-2 sm:flex-1">
        <CheckoutDeliveryCitySelect v-model="cityModel" class="sm:w-full"/>
      </div>
    </div>
    <div class="flex flex-wrap mt-4 sm:mt-3">
      <a
        v-for="(city, idx) in popularCities"
        :key="idx"
        href="javascript:void(0)"
        class="mr-3 mb-2 text-sm font-medium border-b-2 border-grey border-opacity-50 border-dotted hover:text-green hover:border-green transition-all"
        :class="{ '!text-green !border-green': value === city.name }"
        @click.prevent="chooseCity(city.name)"
      >
        {{ city.name }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
    },
  },

  setup(props, { emit }) {
    const popularCities = computed(() => {
      return [
        {
          name: 'Одесса',
        },
        {
          name: 'Днипро',
        },
        {
          name: 'Запорожье',
        },
        {
          name: 'Львов',
        },
        {
          name: 'Киев',
        },
      ]
    })
    const chooseCity = (name: string) => {
      emit('input', name)
    }
    const cityModel = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('input', val)
      },
    })
    return { popularCities, chooseCity, cityModel }
  },
})
</script>

<style lang="postcss">
</style>