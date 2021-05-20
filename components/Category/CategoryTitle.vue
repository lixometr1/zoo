<template>
  <div>
    <div
      class="inline-flex items-center mb-5 text-grey text-opacity-50 md:mb-3 hover:text-opacity-100 transition-colors"
    >
      <svgArrowLeft class="mr-2" width="12" />
      <NuxtLink
        :to="localePath('/')"
        class="text-sm sm:text-xs uppercase font-medium"
        >{{ $t('goToMain') }}</NuxtLink
      >
    </div>
    <h2 class="pb-9 md:pb-5 border-b border-grey border-opacity-20">
      Товары для собак
    </h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowLeft from '@/assets/icons/arrow_long_left.svg?inline'
export default defineComponent({
  components: { svgArrowLeft },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>