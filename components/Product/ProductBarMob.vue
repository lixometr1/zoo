<template>
  <div class="product-bar-mob">
    <div class="product-bar-mob__row">
      <ProductCntCounter v-model="cnt" class="product-bar-mob__cnt" />
      <div class="btn-green flex-1 text-sm">
        {{ $t('toCart') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const cnt = inject('cnt')
    
    return { cnt }
  },
})
</script>

<style lang="postcss">
.product-bar-mob {
  @apply sm:flex hidden fixed z-40 bottom-0 left-0 right-0 rounded-tr-md rounded-tl-5 py-3 px-5.5 bg-white
            items-center;
  box-shadow: 0px 0px 50px rgba(69, 80, 103, 0.15);
  &__row {
    @apply flex w-full h-[40px];
  }
  &__cnt {
    @apply w-[100px] mr-2;
  }
}
</style>