<template>
  <div>
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <NuxtLink to="/brands" class="inline-block mt-6">
        <LinkGoBack :title="$t('goToBrands')" />
      </NuxtLink>
      <h1
        class="pb-8 border-b border-grey border-opacity-20 md:pb-4 mb-10 md:mb-6 sm:mb-4"
      >
        {{ title }}
      </h1>
      <BrandBlocks />
      <StockProducts
        v-if="products.length > 0"
        :items="products"
        class="mt-20"
      />
      <SeoText class="mt-14"/>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const breadcrumbs = [
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
    const title = computed(() => {
      return 'Royal Canin'
    })
    const products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    return { breadcrumbs, title, products }
  },
})
</script>

<style lang="postcss">
</style>