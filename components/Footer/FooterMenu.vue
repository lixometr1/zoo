<template>
  <div
    class="flex justify-between xl:justify-around lg:text-center sm:flex-col sm:items-center sm:space-y-7"
  >
    <div v-for="(menuCol, idx) in items" :key="idx">
      <h4 class="mb-5 sm:mb-2">{{ menuCol.title }}</h4>
      <ul class="space-y-2">
        <li v-for="(link, index) in menuCol.items" :key="index">
          <NuxtLink class="text-grey text-opacity-70 hover:text-green" :to="link.link || '#'">
            {{ link.name }}
          </NuxtLink>
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