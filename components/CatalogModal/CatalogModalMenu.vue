<template>
  <div
    class="w-[300px] flex-shrink-0 catalog-modal-menu space-y-1 bg-grey bg-opacity-20"
  >
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="catalog-modal-menu__item group"
    >
      <div class="flex-y-center">
        <component
          :is="item.icon"
          width="20"
          class="mr-4 text-green catalog-modal-menu__item-icon"
        />
        {{ item.name }}
      </div>
      <svgArrowRight width="10" class="ml-auto text-opacity-50" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
import svgBrand from '@/assets/icons/brand_mock.svg?inline'
import svgDog from '@/assets/icons/dog_mock.svg?inline'
export default defineComponent({
  components: { svgArrowRight },
  setup() {
    const items = [
      {
        name: 'Бренды',
        icon: svgBrand,
      },
      {
        name: 'Товары для собак',
        icon: svgDog,
      },
      {
        name: 'Товары для собак',
        icon: svgDog,
      },
      {
        name: 'Товары для собак',
        icon: svgDog,
      },
      {
        name: 'Товары для рептилий',
        icon: svgDog,
      },
      {
        name: 'Товары для кошек',
      },
      {
        name: 'Товары для собак',
        icon: svgDog,
      },
      {
        name: 'Товары для собак',
        icon: svgDog,
      },
      {
        name: 'Товары для кошек',
      },
    ]
    return {
      items,
    }
  },
})
</script>

<style lang="postcss">
.catalog-modal-menu {
  &__item {
    @apply rounded-sm px-5.5 py-[12px] flex-y-center cursor-pointer w-full border-2 border-white text-grey;
    background: #f8f8f8;
    box-shadow: 10px 10px 40px rgba(62, 63, 67, 0.1);
    &.active,
    &:hover {
      @apply text-white bg-green border-green;
      .catalog-modal-menu__item-icon {
        @apply text-white;
      }
    }
  }
}
</style>