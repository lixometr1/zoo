<template>
  <div class="stock-full-banner">
    <div class="flex items-stretch h-full sm:flex-col sm:items-center">
      <div class="w-2/5 flex-center px-10 sm:px-0 sm:max-w-[120px] sm:mb-2 sm:w-full">
        <img v-if="brand" :src="brand" alt="brand" />
      </div>
      <div class="w-3/5 flex-center px-5 sm:px-0 sm:w-full">
        <img v-if="image" :src="image" alt="image" class="max-w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    // brand: {
    //   type: String,
    // },
    // image: String,
  },
  setup() {
    const brand = computed(() => require('@/assets/img/stock_brand_mock.png'))
    const image = computed(() => require('@/assets/img/stock_brand_image.png'))
    return { brand, image }
  },
})
</script>

<style lang="postcss">
.stock-full-banner {
  @apply h-[340px] rounded-xl bg-white border border-grey-light 
            sm:h-auto p-5;
  box-shadow: 10px 10px 24px rgba(82, 98, 114, 0.15);
}
</style>