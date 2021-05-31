<template>
  <div class="space-y-8 sm:space-y-4">
    <CabinetMailingsAgreement
      v-for="(item, idx) in items"
      :key="idx"
      v-bind="item"
      v-model="active[idx]"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = computed(() => {
      return [
        {
          title: 'Новости, акции компании',
          description:
            'Будьте вкурсе всех событий магазина, просматривайте обзоры',
        },
        {
          title: 'Информация об акциях, промокодах и скидках',
          description:
            'Периодически мы проводим акции со скидками, розыгрышами, промокодами и прочими инструментами, которые могут помочь вам сэкономить на покупке, подобрать подарок себе или близким. Мы обязательно сообщим вам о таких кампаниях, и вы сможете покупать на Розетке по самым лучшим ценам.',
        },
        {
          title: 'Персональные рекомендации',
          description:
            'Ежедневно мы изучаем поведение миллионов наших клиентов. Основываясь на этой информации, мы можем предложить вам товар, который мог бы вас заинтересовать.',
        },
        {
          title: 'Персональные скидки и предложения',
          description:
            'Мы сообщим вам, если у нас появится скидка на товар, которым вы интересовались, товар, который вы добавили в список желаний, или товар, который подобрала наша рекомендационная система.',
        },
      ]
    })
    const active = ref({})
    return { items, active }
  },
})
</script>

<style lang="postcss">
</style>