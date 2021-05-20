<template>
  <div>
    <ASlider :items="items" :sliderOptions="sliderOpts">
      <template #title>
        <TitleWithAll
          class="mb-14 slider:mb-0 md:mb-0"
          :link="link"
          :title="$t('otherArticles')"
          :showAll="true"
        />
      </template>
      <template #slide="{}"> <BlogCard /> </template>
    </ASlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'

export default defineComponent({
  setup() {
    const items = [{}, {}, {}, {}]
    const link = ''
    const sliderOpts: SwiperOptions = {
      slidesPerView: 3,
      spaceBetween: 14,
      breakpoints: {},
    }
    return { items, link, sliderOpts }
  },
})
</script>

<style lang="postcss">
</style>