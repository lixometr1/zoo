<template>
  <div class="catalog-sub-categories">
    <client-only>
      <swiper :options="sliderOpts">
        <swiper-slide
          v-for="(item, idx) in items"
          :key="idx"
          class="!w-[150px] pr-5 sm:pr-1 sm:!w-24"
        >
          <NuxtLink
            :to="item.link || '#'"
            class="
              sm:flex sm:flex-col
              sm:items-center
              group
              catalog-sub-category-link
            "
          >
            <!-- <img
              
              alt=""
              class="rounded-full border-4 border-white w-32 h-32 overflow-hidden object-cover shadow-image sm:w-16 sm:h-16 sm:border-2"
            /> -->
            <CategoryImage
              :src="item.img"
              class="catalog-sub-category w-32 h-32 sm:w-18 sm:h-18"
            />
            <div class="text-center text-sm font-bold mt-2 sm:text-xs sm:mt-0">
              {{ shortName(item.name) }}
              <span class="text-grey text-opacity-50 sm:hidden">{{
                item.cnt
              }}</span>
            </div>
          </NuxtLink>
        </swiper-slide>
      </swiper>
    </client-only>
    <div
      class="
        swiper-button-next
        catalog-sub-categories__arrow-next
        circle-arrow
        swiper-button-reset
      "
    >
      <svgArrowRight width="8" class="sm:w-1.5" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
// eslint-disable-next-line import/named
import { SwiperOptions } from 'swiper'
import useTextShort from '@/utils/compositions/useTextShort'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
import useResizeValue from '~/utils/compositions/useResizeValue'
import { Breakpoints } from '~/types/constants'
export default defineComponent({
  components: { svgArrowRight },
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
      navigation: {
        nextEl: '.catalog-sub-categories__arrow-next',
      },
      slidesPerView: 'auto',
      // freeMode: true,
      // spaceBetween: 20,
      threshold: 5,
    }
    const { value: textLength } = useResizeValue<number>((wW) => {
      if (wW < Breakpoints.sm) {
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
  @apply relative;
  &::before {
    content: '';
    @apply absolute right-0 h-full top-0 bottom-0 w-[100px] z-20 pointer-events-none;
    background: linear-gradient(
      270deg,
      #f6f6f6 10%,
      rgba(246, 246, 246, 0) 100%
    );
  }
  .catalog-sub-category-link {
    &:hover .catalog-sub-category {
      transform: translateZ(0) scale(1.1);
    }
  }
  .catalog-sub-category {
    @apply transition;
    -webkit-backface-visibility: hidden;

    &::before {
      @apply shadow-image;
    }
  }
  &__arrow-next {
    @apply absolute top-1/2 transform -translate-y-1/2 z-30 sm:mt-0 sm:top-6 sm:transform-none;
    width: theme('width.10') !important;
    height: theme('height.10') !important;
    @media screen and (max-width: theme('screens.sm.max')) {
      width: theme('width.7') !important;
      height: theme('height.7') !important;
    }
    &.swiper-button-disabled {
      @apply hidden;
    }
  }
}
</style>