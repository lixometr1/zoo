<template>
  <div>
    <StockFullOffer v-if="type === 1" />
    <StockTextOffer v-else :offer="offer" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    type: { type: Number, default: 1 },
  },
  setup() {
    const offer = {
      sale: '-10%',
      description: 'На продукцию Royal kanin',
      image: require('@/assets/img/feed_mock.png'),
      color: '#C20000',
      bgType: 1,
      date: 'до 22 января',
    }
    const item = {
      title:
        'Старт распродаж <span style="color: #EE1944;">Royal Canin ADULT</span>',
      description:
        'Хороший день начинается с чашечки ароматного кофе Nescafe Dolce Gusto! Изысканные классические вкусы и яркая кофейная экзотика — в удобных порционных капсулах для фирменных кофемашин! Купите капсулы Дольче Густо дешевле до 40% в интернет-магазине «Перекрёсток Впрок»! Скидки до 40% на самые популярные кофейные вкусы Nescafe Dolce Gusto — это великолепный подарок для любого ценителя благородного напитка!',
      date: 'до 31 января',
    }
    return { offer, item }
  },
})
</script>

<style lang="postcss">
</style>