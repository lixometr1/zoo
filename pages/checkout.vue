<template>
  <div>
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <div class="flex lg:flex-col sm:no-gutter">
        <div class="flex-1 pr-9 lg:pr-0 lg:mb-3.5 sm:mb-2">
          <CheckoutBonusProgress class="mb-3.5 sm:mb-2" />
          <CheckoutProducts />
        </div>
        <div class="w-[590px] flex-shrink-0 lg:w-full">
          <CheckoutForm />
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
.checkout-card {
  @apply bg-white rounded-xl border border-grey-light px-14 py-10 
        md:px-9 md:py-6 sm:px-5.5 sm:py-4;
  box-shadow: 15px 15px 40px rgba(82, 98, 114, 0.15);
}
</style>