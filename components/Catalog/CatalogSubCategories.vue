<template>
  <div class="catalog-sub-categories">
    <client-only>
      <swiper :options="sliderOpts">
        <swiper-slide
          v-for="(item, idx) in items"
          :key="idx"
          class="!w-[150px] pr-5 sm:pr-1 sm:!w-24"
        >
          <router-link
            :to="item.link || '#'"
            class="sm:flex sm:flex-col sm:items-center group"
          >
            <!-- <img
              
              alt=""
              class="rounded-full border-4 border-white w-32 h-32 overflow-hidden object-cover shadow-image sm:w-16 sm:h-16 sm:border-2"
            /> -->
            <CategoryImage
              :src="item.img"
              class="catalog-sub-category w-32 h-32 sm:w-16 sm:h-16"
            />
            <div class="text-center text-sm font-bold mt-2 sm:text-xs">
              {{ shortName(item.name) }}
              <span class="text-grey text-opacity-50 sm:hidden">{{
                item.cnt
              }}</span>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
// eslint-disable-next-line import/named
import { SwiperOptions } from 'swiper'
import useTextShort from '@/utils/compositions/useTextShort'
import useResizeValue from '~/utils/compositions/useResizeValue'
export default defineComponent({
  setup() {
    const items = [
      {
        img: require('@/assets/img/dog_mock.png'),
        name: 'Игрушки для собак',
        cnt: 809,
        link: useContext().localePath('/catalog/dog-items/toys'),
      },
      {
        img: require('@/assets/img/cat_2.png'),
        name: 'Лакомства для кошек ',
        cnt: 42,
      },
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек long text',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
    ]

    const sliderOpts: SwiperOptions = {
      slidesPerView: 'auto',
      // freeMode: true,
      // spaceBetween: 20,
      threshold: 5,
    }
    const { value: textLength } = useResizeValue<number>((wW) => {
      if (wW < 760) {
        return 20
      }
      return 25
    })
    const shortName = (str: string) => {
      return useTextShort(str, textLength.value as number)
    }
    return {
      shortName,
      sliderOpts,
      items,
    }
  },
})
</script>

<style lang="postcss">
.catalog-sub-categories {
  .catalog-sub-category {
    @apply transition transform  group-hover:scale-110;
    &::before {
      @apply shadow-image;
    }
  }
}
</style>