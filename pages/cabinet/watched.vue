<template>
  <div>
    <h3 v-if="hasItems" class="mb-14 sm:mb-6">
      {{ $t('watchedProducts') }}
    </h3>
    <div v-if="hasItems" class="flex flex-wrap">
      <ProductCard
        v-for="(product, idx) in products"
        :key="idx"
        :showBtn="false"
        :hoverCollapse="false"
        class="w-1/4 lg:w-1/3 sm:w-1/2 !rounded-none"
      />
    </div>
    <CabinetWatchedEmpty v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  scrollToTop: true,
  setup() {
    const products = computed(() => [{}, {}, {}, {}, {}, {}, {}])
    const hasItems = computed(() => true)
    return { products, hasItems }
  },
})
</script>

<style lang="postcss">
</style>