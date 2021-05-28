<template>
  <div
    class="product-card__actions absolute px-3 py-5 left-0 top-0 text-grey space-y-4 bg-opacity-90 bg-white rounded-br-md"
  >
    <a
      href="#"
      class="text-grey text-opacity-50 block cursor-pointer hover:text-green transition"
      @click.prevent="addToWishlist"
    >
      <svgWishList width="24" />
    </a>
    <a
      href="#"
      class="text-grey text-opacity-50 block cursor-pointer hover:text-green transition"
      @click.prevent="addToCompare"
    >
      <svgCompare width="24" class="" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgWishList from '@/assets/icons/star.svg?inline'
import svgCompare from '@/assets/icons/compare.svg?inline'
export default defineComponent({
  components: { svgCompare, svgWishList },
  setup() {
    const addToCompare = () => {}
    const addToWishlist = () => {}
    return { addToCompare, addToWishlist }
  },
})
</script>

<style lang="postcss">
</style>