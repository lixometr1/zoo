<template>
  <client-only>
    <swiper class="home-offer-slider h-full" :options="sliderOpts">
      <swiper-slide v-for="(item, idx) in items" :key="idx">
        <HomeOfferSliderSlide v-bind="item" />
      </swiper-slide>
      <div
        slot="pagination"
        class="home-offer-slider__pagination swiper-pagination"
      ></div>
    </swiper>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'

export default defineComponent({
  setup() {
    const items = [
      {
        title: 'Скучали за акциями?',
        description: 'Мы знаем как поднять ему настроение! ',
        image: require('@/assets/img/home_offer_dog.png'),
        color: '#C20000',
        oldPrice: '4 176',
        price: '3 776',
        bgType: 1,
      },
      {
        title: 'Скучали за акциями?',
        description:
          'Мы знаем как поднять ему нasd kasd askldj alskdj aklsj dla asd as laастроение! ',
        image: require('@/assets/img/category_offer_1.png'),
        color: '#C20000',
        oldPrice: '4 176',
        price: '5 200',
        bgType: 1,
      },
      {
        title: 'Скучали за акциями?',
        description:
          'Мы знаем как поднять ему нasd kasd askldj alskdj aklsj dla asd as laастроение! ',
        image: require('@/assets/img/category_offer_1.png'),
        color: '#C20000',
        oldPrice: '4 176',
        price: '299',
        bgType: 1,
      },
      {
        title: 'Скучали за акциями?',
        description:
          'Мы знаем как поднять ему нasd kasd askldj alskdj aklsj dla asd as laастроение! ',
        image: require('@/assets/img/category_offer_1.png'),
        color: '#C20000',
        oldPrice: '4 176',
        price: '3 776',
        bgType: 1,
      },
      {
        title: 'Скучали за акциями?',
        description:
          'Мы знаем как поднять ему нasd kasd askldj alskdj aklsj dla asd as laастроение! ',
        image: require('@/assets/img/category_offer_1.png'),
        color: '#C20000',
        oldPrice: '4 176',
        price: '3 776',
        bgType: 1,
      },
    ]
    return { items }
  },
  computed: {
    sliderOpts(): SwiperOptions {
      return {
        spaceBetween: 15,
        slidesPerView: 1,
        threshold: 5,

        autoplay: {
          delay: 3000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      }
    },
  },
})
</script>

<style lang="postcss">
.home-offer-slider {
  @apply !pb-4 sm:!pb-2;
  &__pagination {
    @apply flex sm:px-3 space-x-2;
    bottom: 0 !important;
    .swiper-pagination-bullet {
      @apply block h-[5px] bg-grey flex-1 opacity-30 hover:opacity-50 transition-opacity rounded-sm
            sm:h-[2px];
      &.swiper-pagination-bullet-active {
        @apply bg-grey opacity-100;
      }
    }
  }
}
</style>