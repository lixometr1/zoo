<template>
  <div class="flex items-center justify-between lg:flex-col lg:items-stretch">
    <ProductReview :stars="stars" :total="total" class="sm:order-2" />
    <div class="lg:mt-2 sm:pb-7 sm:border-b sm:border-grey-light sm:mb-5.5 sm:mt-0">
      <a
        class="font-semibold text-sm border-circle-grey !border-opacity-50 !border-grey whitespace-nowrap hover:!border-green hover:text-green transition-colors"
        href="#"
        @click.prevent
        >{{ $t('findCheaper') }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    stars: Number,
    total: Number,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>