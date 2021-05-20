<template>
  <div class="p-5.5 flex flex-col min-h-0 max-h-full">
    <MenuMobSubHeader
      :title="$t('catalogItems')"
      class="mb-5.5 flex-shrink-0"
      @back="goBack"
    />
    <div class="mb-5 flex-shrink-0"><SearchInput /></div>
    <div class="overflow-auto flex-1 min-h-0">
      <div class="pb-5.5 border-b border-grey-light">
        <div class="text-xxs font-bold mb-4.5">
          {{ $t('popularCategories') }}
        </div>
        <div class="space-y-1.5">
          <NuxtLink
            v-for="(item, idx) in popularCategories"
            :key="idx"
            to="#"
            class="flex-y-center px-5 py-3 font-bold text-xs bg-grey-bg rounded-md"
          >
            {{ item.name }}
            <svgArrowRight
              class="text-grey text-opacity-50 ml-auto"
              width="5"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="pt-5.5 blur-down">
        <div class="text-xxs font-bold mb-4.5">{{ $t('allCategories') }}</div>
        <div class="space-y-1.5">
          <NuxtLink
            v-for="(item, idx) in categories"
            :key="idx"
            to="#"
            class="flex-y-center px-5 py-3 font-bold text-xs bg-grey-bg rounded-md"
          >
            {{ item.name }}
            <svgArrowRight
              class="text-grey text-opacity-50 ml-auto"
              width="5"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 z-10 w-full bg-white left-0 right-0 px-5.5 py-1.5">
      <div class="btn-green">
        {{ $t('allCategories') }} <svgArrowDown class="ml-2" width="10" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
export default defineComponent({
  components: { svgArrowRight, svgArrowDown },
  setup(prosp, { emit }) {
    const goBack = () => {
      emit('back')
    }
    const items = [
      {
        name: 'Для птиц',
        icon: require('@/assets/img/parrot_mock.png'),
      },
      {
        name: 'Для собак',
        icon: require('@/assets/img/dog_mock.png'),
      },
      {
        name: 'Для птиц',
        icon: require('@/assets/img/parrot_mock.png'),
      },
      {
        name: 'Для птиц',
        icon: require('@/assets/img/dog_mock.png'),
      },
      {
        name: 'Для птиц',
        icon: require('@/assets/img/parrot_mock.png'),
      },
      {
        name: 'Для птиц',
        icon: require('@/assets/img/dog_mock.png'),
      },
      {
        name: 'Для птиц',
        icon: require('@/assets/img/dog_mock.png'),
      },
      {
        name: 'Для птиц',
        icon: require('@/assets/img/dog_mock.png'),
      },
    ]
    const categories = [
      {
        name: 'Для птиц',
      },
      {
        name: 'Для собак',
      },
      {
        name: 'Для птиц',
      },
      {
        name: 'Для птиц',
      },
      {
        name: 'Для собак',
      },
      {
        name: 'Для птиц',
      },
      {
        name: 'Для птиц',
      },
      {
        name: 'Для собак',
      },
      {
        name: 'Для птиц',
      },
      {
        name: 'Для птиц',
      },
      {
        name: 'Для собак',
      },
      {
        name: 'Для птиц',
      },
    ]
    const popularCategories = [
      {
        name: 'Корм и лакомства для собак',
      },
      {
        name: 'Здоровье собаки',
      },
      {
        name: 'Для птиц',
      },
    ]
    return { goBack, items, categories, popularCategories }
  },
})
</script>

<style lang="postcss">
</style>