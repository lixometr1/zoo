<template>
  <div>
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <NuxtLink to="/brands" class="inline-block mt-6">
        <LinkGoBack :title="$t('goToBrands')" />
      </NuxtLink>
      <h1 class="pb-8 border-b border-grey border-opacity-20 md:pb-4">{{ $t('stocksMany') }}</h1>
      <StocksItems />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const breadcrumbs = [
      {
        name: 'Товари для кошек',
      },
      {
        name: 'Корм и лакомства для кошек',
      },
    ]
    return { breadcrumbs }
  },
})
</script>

<style lang="postcss">
</style>