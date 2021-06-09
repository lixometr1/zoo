<template>
  <div class="product-float-cart-btn" v-on="$listeners">
    <svgToCart width="21" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgToCart from '@/assets/icons/to_cart.svg?inline'
export default defineComponent({
  components: { svgToCart },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.product-float-cart-btn {
  @apply flex-center border-[3px] border-white bg-green 
            w-[58px] h-[58px] rounded-full cursor-pointer hover:bg-green-700 transition-all;
  box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.05),
    5px 5px 20px rgba(0, 0, 0, 0.1),
    inset -3px -3px 15px rgba(255, 255, 255, 0.15),
    inset 3px 3px 15px rgba(0, 0, 0, 0.15);
   
}

</style>