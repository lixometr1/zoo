<template>
  <div class="absolute left-3 top-5 text-grey space-y-4">
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