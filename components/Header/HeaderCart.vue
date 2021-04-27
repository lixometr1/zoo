<template>
  <a href="#" class="flex items-center" @click.prevent="openCart">
    <div class="relative">
      <svgCart width="30" />
      <div
        class="absolute top-0 right-0 text-xs leading-none text-white bg-green rounded-full py-0.5 px-1.5 transform translate-x-2/4"
      >
        {{ cartCnt }}
      </div>
    </div>
    <div class="ml-5 xs:hidden">
      <span class="text-green font-medium">{{ cartPrice }}</span>
      <span class="text-sm text-grey text-opacity-70">грн</span>
    </div>
  </a>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgCart from '@/assets/icons/cart.svg?inline'
export default defineComponent({
  components: { svgCart },
  setup() {
    const cartCnt = computed(() => '1')

    const cartPrice = computed(() => '12.23')
    const openCart = () => {}
    return { cartCnt, openCart, cartPrice }
  },
})
</script>

<style lang="postcss">
</style>