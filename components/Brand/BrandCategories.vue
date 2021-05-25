<template>
  <div class="stock-categories">
    <div class="flex flex-wrap -mx-2">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="p-2 w-1/4 md:w-1/3 sm:w-1/2 xs:w-full"
      >
        <NuxtLink to="#" class="stock-categories__item">
          <div class="flex-center h-[240px] xs:w-[80px] xs:h-auto xs:mr-4.5">
            <img :src="item.image" :alt="item.title" class="max-h-full"/>
          </div>
          <div
            class="text-center leading-6 mt-1.5 text-2lg font-bold lg:text-lg lg:leading-6 sm:text-base xs:text-left xs:text-sm xs:leading-4"
          >
            {{ item.title }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        title: 'Корм и лакомства для собак',
        image: require('@/assets/img/stock_category_1.png'),
      },
      {
        title: 'Поводки и ошейники',
        image: require('@/assets/img/stock_category_2.png'),
      },
      {
        title: 'Здоровье собаки',
        image: require('@/assets/img/stock_category_3.png'),
      },
      {
        title: 'Гигиена и уход',
        image: require('@/assets/img/stock_category_1.png'),
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
.stock-categories {
  &__item {
    @apply h-full px-14 py-4.5 bg-white flex-y-center flex-col rounded-xl hover:shadow-none transition-all
          lg:px-8
          sm:px-4
          xs:flex-row sm:rounded-lg;
    box-shadow: 10px 10px 24px rgba(82, 98, 114, 0.15);
  }
}
</style>
