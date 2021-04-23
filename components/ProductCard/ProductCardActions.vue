<template>
  <div class="absolute px-3 py-5 left-0 top-0 text-grey space-y-4 bg-opacity-90 bg-white rounded-br-md">
    <a href="#" class="opacity-50 block cursor-pointer hover:opacity-100 transition">
      <svgWishList width="24" />
    </a>
    <a href="#" class="opacity-50 block cursor-pointer hover:opacity-100 transition">
      <svgCompare width="24" />
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
    return {}
  },
})
</script>

<style lang="postcss">
</style>