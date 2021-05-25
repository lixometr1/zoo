<template>
  <div class="flex flex-wrap -mx-2.5">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="px-2.5 my-10 w-1/3 lg:w-1/2 sm:w-full md:my-8 sm:my-4"
    >
      <StocksItem :item="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        offer: {
          description: 'На продукцию Royal kanin',
          image: require('@/assets/img/feed_mock.png'),
          color: '#CD2420',
          sale: '-10%',
          brand: require('@/assets/img/whiskas_mock.png'),
          bgType: 1,
          date: 'до 2 января',
        },
        title: 'Харьков - держись! Бесплатные доставки!',
        date: 'до 31 января',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
      },

      {
        offer: {
          description: 'На заказ в г. Харьков',
          image: require('@/assets/img/feed_mock.png'),
          color: '#fff',
          sale: '-5%',
          brand: require('@/assets/img/zoo_mock.png'),
          bgType: 0,
          date: 'до 22 марта',
        },
        title:
          'Харьков - держись! <span style="color: #20BD56;">Бесплатные доставки!</span>',
        date: 'до 31 января',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
      },
      {
        offer: {
          description: 'На продукцию Whiskas',
          image: require('@/assets/img/category_offer_2.png'),
          color: '#872B82',
          sale: '-15%',
          brand: require('@/assets/img/whiskas_mock.png'),
          bgType: 1,
          date: 'до 22 марта',
        },
        title: '<span style="color: #C733BE;">Whiskas</span> для всех!',
        date: 'до 31 января',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
      },
      {
        offer: {
          description: 'На продукцию Whiskas',
          image: require('@/assets/img/category_offer_2.png'),
          color: '#872B82',
          sale: '-15%',
          brand: require('@/assets/img/whiskas_mock.png'),
          bgType: 1,
          date: 'до 22 марта',
        },
        title: 'Харьков - держись! Бесплатные доставки!',
        date: 'до 31 января',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
      },
      {
        offer: {
          description: 'На продукцию Royal kanin',
          image: require('@/assets/img/feed_mock.png'),
          color: '#D52622',
          sale: '-10%',
          brand: require('@/assets/img/royal_canin_mock.png'),
          bgType: 1,
          date: 'до 31 января',
        },
        title:
          'Старт распродаж <span style="color: #EE1944;">Royal Canin ADULT</span> ',
        date: 'до 31 января',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
      },
      {
        offer: {
          description: 'На заказ в г. Харьков',
          image: require('@/assets/img/feed_mock.png'),
          color: '#fff',
          sale: '-5%',
          brand: require('@/assets/img/zoo_mock.png'),
          bgType: 0,
          date: 'до 2 января',
        },
        title: 'Харьков - держись! Бесплатные доставки!',
        date: 'до 31 января',
        description: 'Скидки и рассрочка от 2.888 грн/мес',
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
</style>