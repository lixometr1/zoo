<template>
  <div class="page-product">
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <ProductHero />
      <ProductInfo class="mt-12 md:mt-10" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  provide,
  ref,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const breadcrumbs = computed(() => {
      return [
        {
          name: 'Каталог',
        },
        {
          name: 'Товары для собак',
        },
        {
          name: 'Корм и лакомства для кошек',
        },
      ]
    })
    provide('product', ref({ test: true }))

    return { breadcrumbs }
  },
})
</script>

<style lang="postcss">
</style>