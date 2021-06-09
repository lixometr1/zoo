<template>
  <div class="flex relative">
    <HomeCategoriesList />
    <div class="flex-1 pl-12 lg:pl-5 md:pl-0 min-w-0 sm:no-gutter">
      <HomeOfferSlider :items="sliderItems" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    sliderItems: {
      type: Array,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>