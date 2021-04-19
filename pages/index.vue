<template>
  <div class="container">
    <AppBreadcrumbs class="py-page" :items="breadcrumbs" />
    <div class="flex">
      <div class="w-[300px] flex-shrink-0">
        <CatalogFilters />
      </div>
      <div class="flex-1">
        <div class="flex justify-between">
          <div class="flex items-baseline">
            <h2 class="mr-4">Корм и лакомства для кошек</h2>
            <span class="text-grey text-opacity-50">
              1928 {{ $t('items[2]') }}
            </span>
          </div>
          <div>
            <div class="flex">
              <span>{{ $t('sort') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const breadcrumbs = [
      {
        name: 'Каталог',
      },
      {
        name: 'Товары для кошек',
      },
      {
        name: 'Корм и лакомства для кошек',
      },
    ]
    return {
      breadcrumbs,
    }
  },
})
</script>

<style >
</style>