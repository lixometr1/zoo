<template>
  <div class="cabinet-menu">
    <div class="space-y-1.5">
      <NuxtLink
        v-for="(item, idx) in items"
        :key="idx"
        :to="item.routeName || '#'"
        :class="{ disabled: item.disabled }"
        class="cabinet-menu__item"
        exact-active-class="active"
      >
        {{ item.name }}
        <svgArrowRight width="10" class="ml-auto text-opacity-50" />
      </NuxtLink>
    </div>
    <div class="space-y-1.5 mt-10">
      <NuxtLink
        v-for="(item, idx) in items2"
        :key="idx"
        :to="item.routeName || '#'"
        class="cabinet-menu__item"
        :class="{ disabled: item.disabled }"
        exact-active-class="active"
      >
        {{ item.name }}
        <svgArrowRight width="10" class="ml-auto text-opacity-50" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
export default defineComponent({
  components: { svgArrowRight },
  setup() {
    const { app } = useContext()
    const items = computed(() => {
      return [
        {
          name: 'Личные данные',
          routeName: app.localeLocation('cabinet-personal-data'),
        },
        {
          name: 'Мои заказы',
          routeName: app.localeLocation('cabinet-orders'),
        },
        {
          name: 'Мои отзывы',
          routeName: app.localeLocation('cabinet-reviews'),
        },
        {
          name: 'Список желаний',
          routeName: app.localeLocation('cabinet-wishlist'),
        },
        {
          name: 'Просмотренные товары',
          routeName: app.localeLocation('cabinet-watched'),
        },
      ]
    })
    const items2 = computed(() => {
      return [
        {
          name: 'Рассылки',
          // routeName:
        },
        {
          name: 'Бонусный счет',
        },
      ]
    })
    return { items, items2 }
  },
})
</script>

<style lang="postcss">
.cabinet-menu {
  &__item {
    @apply rounded-sm px-5.5 py-[12px] flex-y-center cursor-pointer w-full border-2 border-white text-grey bg-grey-600 transition-all;
    box-shadow: 10px 10px 40px rgba(62, 63, 67, 0.1);
    &.active,
    &:hover {
      @apply text-white bg-green border-green;
      .catalog-modal-menu__item-icon {
        @apply text-white;
      }
    }
    &.active {
      @apply transform translate-x-4;
    }
  }
}
</style>