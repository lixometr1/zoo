<template>
  <div class="flex items-center px-8 space-x-6 text-grey">
    <NuxtLink :to="localeLocation('compare')">
      <svgCompare
        class="cursor-pointer text-grey hover:text-green transition"
        width="33"
    /></NuxtLink>
    <NuxtLink :to="localeLocation('cabinet-wishlist')" href="#"
      ><svgWishList
        class="cursor-pointer text-grey hover:text-green transition"
        width="30"
    /></NuxtLink>
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