<template>
  <div class="bg-white py-16 product-brand-items sm:py-8">
    <div class="container flex items-start lg:flex-col sm:items-center">
      <div class="flex sm:flex-col sm:items-center">
        <div class="bg-white rounded-lg p-2 sm:mb-7 product-brand-items__image">
          <img :src="brandImage" width="200" alt="brand" />
        </div>
        <div class="ml-12 sm:ml-0 sm:text-center">
          <div class="font-bold text-3xl mb-2 sm:mb-1 sm:text-2lg sm:leading-6">
            {{ $t('otherProducts') }}
            <div class="text-green">
              {{ brandName }}
            </div>
          </div>
          <a
            class="text-sm font-medium border-circle-grey hover:text-green hover:border-green transition"
            href="#"
            @click.prevent
          >
            {{ $t('watchAll') }}
          </a>
        </div>
      </div>
      <div
        class="ml-20 flex-1 flex items-start flex-wrap lg:ml-0 lg:mt-8 md:mt-5 sm:justify-center"
      >
        <a
          v-for="(item, idx) in categories"
          :key="idx"
          href="#"
          class="border border-grey border-opacity-20 rounded-md font-bold text-sm transition-colors 
          hover:text-white hover:bg-green hover:border-green py-3 px-5.5 text-center mr-2 mb-2
          sm:px-4.5 sm:py-2.5 sm:text-xs"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const brandImage = computed(() => {
      return require('@/assets/img/product_brand_mock.png')
    })
    const brandName = computed(() => 'Royal Canin')
    const categories = computed(() => {
      return [
        {
          name: 'Холистик корма',
        },
        {
          name: 'Сухие корма',
        },
        {
          name: 'Влажные корма, консервы',
        },
        {
          name: 'Игрушки для собак',
        },
        {
          name: 'Ошейники',
        },
        {
          name: 'Игрушки для кошек',
        },
        {
          name: 'Аксессуары',
        },
        {
          name: 'Другое...',
        },
      ]
    })
    return { brandImage, brandName, categories }
  },
})
</script>

<style lang="postcss">
.product-brand-items {
  &__image {
    box-shadow: 5px 5px 24px rgba(82, 98, 114, 0.15);
  }
}
</style>