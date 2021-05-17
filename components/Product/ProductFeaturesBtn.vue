<template>
  <div class="flex items-center space-x-5">
    <a href="#"> <svgCompare class="cursor-pointer text-grey text-opacity-50 hover:text-green transition max-w-full" width="33" /></a>
    <a href="#"><svgWishList class="cursor-pointer text-grey text-opacity-50 hover:text-green transition max-w-full" width="30" /></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgCompare from '@/assets/icons/compare.svg?inline'
import svgWishList from '@/assets/icons/star.svg?inline'
export default defineComponent({
  components: { svgCompare, svgWishList },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>