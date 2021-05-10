<template>
  <div class="category-brands">
    <div class="container">
      <TitleWithAll class="!mb-0" :title="title" :showAll="showAll" />
      <div
        v-if="description"
        class="mt-3 text-grey text-opacity-80 w-9/12 md:w-full"
      >
        {{ description }}
      </div>
      <div class="flex flex-wrap mt-12 md:mt-5 sm:mt-3">
        <router-link
          v-for="(item, idx) in items"
          :key="idx"
          :to="item.link || '#'"
          class="category-brands__item"
        >
          <img :src="item.image" class="mx-auto" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: String,
    description: String,
    showAll: Boolean,
  },
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
            md:w-[120px] md:h-[90px] lg:mr-0 lg:w-1/6 md:w-1/6 sm:w-1/4 xs:w-1/3 md:p-6 xs:p-4 xxs:p-6 xxs:w-1/2;
    &:hover {
      box-shadow: 5px 5px 24px rgba(82, 98, 114, 0.15);
    }
    img {
      @apply object-contain w-full h-full;
    }
  }
}
</style>