<template>
  <div>
    <client-only>
      <swiper :options="sliderOpts">
        <swiper-slide class="!w-[150px] pr-5" v-for="(item, idx) in items" :key="idx">
          <router-link to="#">
            <img
              :src="item.img"
              alt=""
              class="rounded-full border-4 border-white w-32 h-32 overflow-hidden object-cover shadow-image"
            />
            <div class="text-center text-sm font-bold mt-2">
              {{ item.name }}
              <span class="text-grey text-opacity-50">{{ item.cnt }}</span>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
// eslint-disable-next-line import/named
import { SwiperOptions } from 'swiper'
export default defineComponent({
  setup() {
    const items = [
      {
        img: require('@/assets/img/cat_1.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_2.png'),
        name: 'Лакомства для кошек',
        cnt: 42,
      },
      {
        img: require('@/assets/img/cat_3.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_3.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_3.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_3.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_3.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_3.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_3.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
      {
        img: require('@/assets/img/cat_3.png'),
        name: 'Сухой корм для кошек ',
        cnt: 809,
      },
    ]

    const sliderOpts: SwiperOptions = {
      slidesPerView: 'auto',
      freeMode: true,
      // spaceBetween: 20,
      threshold: 5,
    }
    return {
      sliderOpts,
      items,
    }
  },
})
</script>

<style lang="postcss">
</style>