<template>
  <div>
    <SmallProductsSlider sliderClass="md:!-mx-5.5" :title="$t('watchedItems')" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>