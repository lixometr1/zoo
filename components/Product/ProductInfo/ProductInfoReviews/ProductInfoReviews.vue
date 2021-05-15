<template>
  <div>
    <ProductInfoReviewsSummary />
    <div class="space-y-9 mt-9">
      <ProductInfoReviewsItem
        v-for="(item, idx) in items"
        :key="idx"
        :item="item"
        class="border-b border-grey-500"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        name: 'Андрей Маринович',
        stars: 3,
        date: new Date('2019-12-20'),
        text:
          'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации существенных финансовых и административных условий. Товарищи!',
        pros: 'Класный дизайн, дедушке понравился',
        cons: 'Цена кусаеться',
        likes: 123,
        dislikes: 23,
        action: 'like'
      },
      {
        name: 'Андрей Маринович',
        stars: 3,
        date: new Date('2019-12-20'),

        text:
          'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации существенных финансовых и административных условий. Товарищи!',
        pros: 'Класный дизайн, дедушке понравился',
        cons: 'Цена кусаеться',
        likes: 123,
        dislikes: 23,
      },
      {
        name: 'Андрей Маринович',
        stars: 4,
        date: new Date('2019-12-20'),

        text:
          'Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации существенных финансовых и административных условий. Товарищи!',
        pros: 'Класный дизайн, дедушке понравился',
        cons: 'Цена кусаеться',
        likes: 123,
        dislikes: 23,
        action: 'dislike'

      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
</style>