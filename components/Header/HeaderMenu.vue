<template>
  <ul class="flex items-center justify-center">
    <li v-for="(item, idx) in items" :key="idx" class="px-4">
      <NuxtLink
        :to="item.routeName ? localePath({ name: item.routeName }) : '#'"
        class="px-4 py-2 rounded-md transition hover:bg-green hover:text-white"
        exact-active-class="bg-green rounded-md text-white"
        >{{ item.name }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = ref([
      {
        name: 'Акции',
      },
      {
        name: 'Блог',
      },
      {
        name: 'Доставка и оплата',
      },
      {
        name: 'Контакты',
      },
    ])
    return {
      items,
    }
  },
})
</script>

<style lang="postcss">
</style>