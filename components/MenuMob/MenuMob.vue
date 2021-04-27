<template>
  <APanel @close="close" :isOpen="isOpen" contentClass="menu-mob__content">
    <MenuMobHeader />
    <div class="py-3">
      <div class="border-b border-grey-light pb-2">
        <MenuMobItem
          v-for="(item, idx) in menuItems"
          :key="idx"
          :item="item"
          @click="onItemClick(item)"
        />
      </div>
      <div class="pt-2">
        <MenuMobItem
          v-for="(item, idx) in actionItems"
          :key="idx"
          :item="item"
        />
      </div>
    </div>
  </APanel>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'
import svgFavourite from '@/assets/icons/star.svg?inline'
import svgArrowBurger from '@/assets/icons/burger.svg?inline'
import svgCheckmark from '@/assets/icons/checkmark_square.svg?inline'
import svgBrand from '@/assets/icons/brand.svg?inline'
import svgSale from '@/assets/icons/sale.svg?inline'
import svgCart from '@/assets/icons/cart.svg?inline'
import svgHistory from '@/assets/icons/history.svg?inline'
import svgCompare from '@/assets/icons/compare.svg?inline'
import svgGift from '@/assets/icons/gift.svg?inline'
import useMobileMenu from '@/utils/compositions/useMobileMenu'
interface IMenuItem {
  name: string
  icon: any
  type: string
  routeName?: string
}
export default defineComponent({
  setup() {
    const { isOpen, open, close } = useMobileMenu()
    const menuItems = computed(() => {
      return [
        {
          name: 'Каталог',
          icon: svgArrowBurger,
          type: 'catalog',
        },
        {
          name: 'Бренд',
          icon: svgBrand,
        },
        {
          name: 'Акции',
          icon: svgSale,
          type: 'link',
          link: '123',
        },
        {
          name: 'Корзина',
          icon: svgCart,
          cnt: 5,
        },
      ]
    })
    const actionItems = computed(() => {
      return [
        {
          name: 'Мои заказы',
          icon: svgCheckmark,
          cnt: 4,
        },
        {
          name: 'Список желаний',
          icon: svgFavourite,
        },
        {
          name: 'Сравнение',
          icon: svgCompare,
          cnt: 2,
        },
        {
          name: 'Просмотренные',
          icon: svgHistory,
        },
        {
          name: 'Бонусы',
          icon: svgGift,
        },
      ]
    })
    const onItemClick = (item: IMenuItem) => {
      const router = useRouter()
      if (item.type === 'link') {
        router.push({ name: item.routeName })
        return
      }
      if (item.type === 'catalog') {
      }
      if (item.type === 'brand') {
      }
    }
    return { menuItems, actionItems, onItemClick, isOpen, close }
  },
})
</script>

<style lang="postcss">
.menu-mob {
  @apply z-50 fixed top-0 left-0 right-0 bottom-0;
  &__content {
    @apply w-[250px]  h-full bg-white z-20 relative overflow-y-auto;
  }
}
</style>