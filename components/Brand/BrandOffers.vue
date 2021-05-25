<template>
  <div class="flex flex-wrap my-3.5 -mx-2 md:flex-col md:mx-0">
    <div v-for="(item, i) in items" :key="i" class="px-2 w-1/2 md:w-full md:px-0 md:my-1.5">
      <OfferCard v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        title: 'Ваш мопс не доволен кормом?',
        description:
          'Мы знаем как поднять ему настроение! Переходите в каталог еды для породы Мопс и порайдуте своего питомца!',
        btn: 'Посмотреть ассортимент',
        image: require('@/assets/img/category_offer_1.png'),
        color: '#C20000',
        bgType: 1,
      },
      {
        sale: '-15%',
        description: 'На продукцию Whiskas',
        btn: 'Посмотреть ассортимент',
        image: require('@/assets/img/category_offer_2.png'),
        color: '#872B82',
        bgType: 2,
        brand: require('@/assets/img/whiskas_mock.png'),
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
</style>