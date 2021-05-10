<template>
  <div class="home-categories md:no-gutter">
    <AppSlider
      arrowNextClass="md:!hidden"
      arrowPrevClass="md:!hidden"
      :sliderOptions="sliderOpts"
      sliderClass="md:!pt-0"
      slideClass="xs:!w-auto "
      :items="items"
    >
      <template #slide="{ item }">
        <router-link
          :to="item.link || '#'"
          class="text-center flex-y-center flex-col w-[230px] md:w-[180px] xs:w-[130px]"
        >
          <CategoryImage :src="item.image" class="" />
          <div class="">
            <span class="text-2lg font-medium md:text-lg xs:text-sm ">{{
              item.title
            }}</span>
            <span
              class="text-sm text-green font-extrabold relative bottom-2 xs:hidden"
              >{{ item.cnt }}</span
            >
          </div>
        </router-link>
      </template>
    </AppSlider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper/index'

export default defineComponent({
  setup() {
    const items = [
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Для собак',
        cnt: 5830,
      },
      {
        image: require('@/assets/img/parrot_mock_2.png'),
        title: 'Для птиц ',
        cnt: 2145,
      },
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Для собак',
        cnt: 5830,
      },
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Для собак',
        cnt: 423,
      },
      {
        image: require('@/assets/img/cat_1.png'),
        title: 'Для котов ',
        cnt: 233,
      },
      {
        image: require('@/assets/img/dog_mock.png'),
        title: 'Для собак',
        cnt: 423,
      },
      {
        image: require('@/assets/img/parrot_mock_2.png'),
        title: 'Для птиц ',
        cnt: 2145,
      },
      {
        image: require('@/assets/img/cat_1.png'),
        title: 'Для котов ',
        cnt: 233,
      },
    ]
    return { items }
  },
  computed: {
    sliderOpts(): SwiperOptions {
      return {
        slidesPerView: 'auto',
        // centeredSlides: true,
        breakpoints: {
          1450: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 5,
          },
          700: {
            slidesPerView: 4,
          },
          550: {
            slidesPerView: 3,
            // centeredSlides: false
          },
        },
      }
    },
  },
})
</script>

<style lang="postcss">
</style>