<template>
  <div class="my-3 stock-full-offer">
    <OfferCard v-bind="item" class="w-full" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    // item: {
    //   type: Object,
    //   default: () => ({}),
    // },
  },
  setup() {
    const item = {
      description: 'Мы знаем как поднять ему настроение! Переходите в каталог еды для породы Мопс и порайдуте своего питомца!',
      image: require('@/assets/img/stock_full_offer_mock.png'),
      color: '#CD2420',
      title: 'Ваш мопс не доволен кормом?',
      bgType: 1,
      btn: 'Посмотреть ассортимент',
    }
    return { item }
  },
})
</script>

<style lang="postcss">
.stock-full-offer {
  .offer-card {
    &__content {
      @apply max-w-[480px];
    }
  }
}
</style>