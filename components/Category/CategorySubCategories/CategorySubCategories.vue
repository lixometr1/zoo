<template>
  <div class="flex flex-wrap">
    <CategorySubCategory
      v-for="(subCategory, idx) in items"
      :key="idx"
      :item="subCategory"
      class="mb-7 px-3.5 sm:px-2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Корм и лакомства для собак',
        link: '',
        children: [
          {
            title: 'Сухой корм для собак',
          },
          {
            title: 'Лакомства',
          },
          {
            title: 'Консервы',
          },
          {
            title: 'Заменители молока',
          },
        ],
      },
      {
        image: require('@/assets/img/parrot_mock_2.png'),
        title: 'Корм и лакомства для собак',
        link: '',
        children: [
          {
            title: 'Здоровье собаки',
          },
          {
            title: 'Лакомства',
          },
          {
            title: 'Консервы',
          },
          {
            title: 'Заменители молока',
          },
        ],
      },
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Здоровье собаки',
        link: '',
        children: [
          {
            title: 'Сухой корм для собак',
          },
          {
            title: 'Лакомства',
          },
          {
            title: 'Консервы',
          },
          {
            title: 'Заменители молока',
          },
        ],
      },
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Корм и лакомства для собак',
        link: '',
        children: [
          {
            title: 'Сухой корм для собак',
          },
          {
            title: 'Лакомства',
          },
          {
            title: 'Консервы',
          },
          {
            title: 'Заменители молока',
          },
        ],
      },
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Корм и лакомства для собак',
        link: '',
        children: [
          {
            title: 'Сухой корм для собак',
          },
          {
            title: 'Лакомства',
          },
          {
            title: 'Консервы',
          },
          {
            title: 'Заменители молока',
          },
        ],
      },
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Корм и лакомства для собак',
        link: '',
        children: [
          {
            title: 'Сухой корм для собак',
          },
          {
            title: 'Лакомства',
          },
          {
            title: 'Консервы',
          },
          {
            title: 'Заменители молока',
          },
        ],
      },
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Корм и лакомства для собак',
        link: '',
        children: [
          {
            title: 'Сухой корм для собак',
          },
          {
            title: 'Лакомства',
          },
          {
            title: 'Консервы',
          },
          {
            title: 'Заменители молока',
          },
        ],
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
</style>