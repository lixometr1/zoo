<template>
  <div>
    <ProductsSlider
      :items="items"
      link="#"
      :title="$t('popular')"
      :showAll="true"
    >
      <template #slide="{}">
        <ProductCard :multilineTitle="false" :showReviews="false" />
      </template>
    </ProductsSlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'
export default defineComponent({
  setup() {
    const items = [{}, {}, {}, {}, {}, {}]
    return { items }
  },
  computed: {
    
  },
})
</script>

<style lang="postcss">
</style>