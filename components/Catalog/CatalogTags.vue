<template>
  <div class="flex flex-wrap items-center ">
    <swiper :options="sliderOpts" class="ml-0">
      <swiper-slide class="!w-auto">
        <div class="flex max-w-none space-x-2">
          <div
            v-for="(tag, idx) in row1"
            :key="idx"
            class="catalog-tag"
            :class="{ active: activeItems.includes(idx) }"
            tabindex="0"
            @click="chooseTag(idx)"
          >
            {{ tag }}
          </div>
        </div>
        <div class="flex max-w-none space-x-2">
          <div
            v-for="(tag, idx) in row2"
            :key="idx"
            class="catalog-tag mt-2"
            :class="{ active: activeItems.includes(idx) }"
            tabindex="0"
            @click="chooseTag(idx)"
          >
            {{ tag }}
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { SwiperOptions } from 'swiper'

export default defineComponent({
  setup() {
    const items = [
      'Для стерилизованных кошек',
      'Для пожилых',
      'Royal Canin',
      'Kitekat',
      'Hills',
      'Pro Plan',
      'Perfect Fit',
      'При чуствительном пищеварении',
      'При аллергии',
      'При болезнях ЖКТ',
      'Для стерилизованных кошек',
      'Для пожилых',
      'Royal Canin',
      'Kitekat',
      'Hills',
      'Pro Plan',
      'Perfect Fit',
      'При чуствительном пищеварении',
      'При аллергии',
      'При болезнях ЖКТ',
    ]
    const row1 = computed(() => {
      return items.filter((_, idx) => !(idx & 1))
    })
    const row2 = computed(() => {
      return items.filter((_, idx) => idx & 1)
    })
    const activeItems = ref([0])
    const chooseTag = (idx: number) => {
      if (activeItems.value.includes(idx)) {
        activeItems.value = activeItems.value.filter(
          (item: number) => item !== idx
        )
      } else {
        activeItems.value.push(idx)
      }
    }
    const sliderOpts: SwiperOptions = {
      freeMode: true,
      slidesPerView: 'auto',
      threshold: 5
    }
    return { sliderOpts, row1, row2, items, activeItems, chooseTag }
  },
})
</script>

<style lang="postcss">
.catalog-tag {
  @apply px-5.5 py-3 flex-shrink-0 text-grey rounded-full border border-grey-light bg-white leading-5 cursor-pointer hover:text-white hover:bg-green transition;
  &.active {
    @apply bg-green text-white;
  }
}
</style>