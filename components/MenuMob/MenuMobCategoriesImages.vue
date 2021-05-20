<template>
  <div class="p-5.5 overflow-y-auto">
    <MenuMobSubHeader
      :title="$t('catalogItems')"
      class="mb-5.5"
      @back="goBack"
    />
    <div class="mb-7"><SearchInput /></div>
    <div class="flex flex-wrap justify-around">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="w-1/2 flex-x-center mb-5"
      >
        <NuxtLink class="text-center" to="#">
          <CategoryImage class="!w-[100px] !h-[100px]" :src="item.icon" />
          <div class="font-sm font-medium mt-2.5">
            {{ item.name }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
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
    return { goBack, items }
  },
})
</script>

<style lang="postcss">
</style>