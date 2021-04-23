<template>
  <div class="flex justify-between xl:justify-around">
    <div v-for="(menuCol, idx) in items" :key="idx">
      <h3 class="mb-5">{{ menuCol.title }}</h3>
      <ul class="space-y-2">
        <li v-for="(link, index) in menuCol.items" :key="index">
          <router-link
            class="text-grey text-opacity-70"
            :to="link.link || '#'"
            >{{ link.name }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        title: 'Помощь',
        items: [
          {
            name: 'Доставка',
          },
          {
            name: 'Оплата',
          },
          {
            name: 'Возврат и обмен',
          },
          {
            name: 'Бонусы',
          },
          {
            name: 'Контакты',
          },
        ],
      },
      {
        title: 'Магазин',
        items: [
          {
            name: 'Пункты самовывоза',
          },
          {
            name: 'Магазин на Академической',
          },
          {
            name: 'Возврат и обмен',
          },
          {
            name: 'Бонусы',
          },
          {
            name: 'Контакты',
          },
        ],
      },
      {
        title: 'Сообщество',
        items: [
          {
            name: 'Доставка',
          },
          {
            name: 'Рейтинг детских товаров',
          },
          {
            name: 'Возврат и обмен',
          },
          {
            name: 'Медицинские центры',
          },
          {
            name: 'Вопрос ветеринару',
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