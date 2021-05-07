<template>
  <div class=" category-brands">
    <div class="container">
      <h2 class="mb-12 md:mb-5 sm:mb-3">{{ $t('categoryBrands') }}</h2>
      <div class="flex flex-wrap">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="category-brands__item"
        >
          <img :src="item.image" class="mx-auto" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        image: require('@/assets/img/brand_mock_1.png'),
      },
      {
        image: require('@/assets/img/brand_mock_2.png'),
      },
      {
        image: require('@/assets/img/brand_mock_3.png'),
      },
      {
        image: require('@/assets/img/brand_mock_4.png'),
      },
      {
        image: require('@/assets/img/brand_mock_1.png'),
      },
      {
        image: require('@/assets/img/brand_mock_1.png'),
      },
      {
        image: require('@/assets/img/brand_mock_1.png'),
      },
      {
        image: require('@/assets/img/brand_mock_2.png'),
      },
      {
        image: require('@/assets/img/brand_mock_3.png'),
      },
      {
        image: require('@/assets/img/brand_mock_4.png'),
      },
      {
        image: require('@/assets/img/brand_mock_4.png'),
      },
      {
        image: require('@/assets/img/brand_mock_4.png'),
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
.category-brands {
  @apply bg-white py-11 sm:py-8;
  &__item {
    @apply w-[170px] h-[115px] rounded-lg bg-transparent transition-shadow mr-2 mb-2 p-8 
            md:w-[120px] md:h-[90px] xs:w-1/3 md:p-6 xs:p-4 xxs:p-6 xxs:w-1/2 xxs:mr-0;
    &:hover {
      box-shadow: 5px 5px 24px rgba(82, 98, 114, 0.15);
    }
    img {
      @apply object-contain w-full h-full;
    }
  }
}
</style>