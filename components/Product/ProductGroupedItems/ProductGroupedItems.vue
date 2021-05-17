<template>
  <div>
    <ASlider :title="$t('economyTogether')" :sliderOptions="sliderOpts" :items="items">
      <template #slide="{}">
        <ProductGroupedItem />
      </template>
    </ASlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'
export default defineComponent({
  setup() {
    const items = [{}, {}]
    return { items }
  },
  computed: {
    sliderOpts(): SwiperOptions {
      return {
        spaceBetween: 15
      }
    }
  }
})
</script>

<style lang="postcss">
</style>