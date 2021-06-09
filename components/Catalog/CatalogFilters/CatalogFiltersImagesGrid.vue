<template>
  <CatalogFiltersItem :title="title" :open="true">
    <perfect-scrollbar
      class="custom-scrollbar max-h-[260px] pr-3 flex flex-wrap -mx-0.5"
    >
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="
          select-none
          cursor-pointer
          text-lg
          font-medium
          sm:text-xs
          p-0.5
          w-1/3
        h-16
        "
        @click="toggle(idx)"
      >
        <div
          class="
            border border-grey-light
            rounded-md
            flex-shrink-0
            relative
            flex-center
            bg-white
            w-full
            h-full
          "
          :class="{ 'border-green': activeValues.includes(idx) }"
        >
          <div
            v-if="activeValues.includes(idx)"
            class="
              absolute
              top-0
              right-0
              rounded-tr-5 rounded-bl-5
              text-white
              bg-green
              w-4.5
              h-4.5
              flex-center
              z-20
            "
          >
            <svgCheckmark width="10" />
          </div>
          <img :src="item.image" class="object-contain max-w-full max-h-full" />
        </div>
      </div>
    </perfect-scrollbar>
  </CatalogFiltersItem>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@nuxtjs/composition-api'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'
export default defineComponent({
  components: { svgCheckmark },
  props: {
    title: String,
    // items
  },
  setup() {
    const items = [
      {
        cnt: 10,
        name: 'Кролик asd asdasda asdad',
        image: require('@/assets/img/mutton_mock.png'),
      },
      {
        cnt: 13,
        name: 'Баранина ',
        image: require('@/assets/img/rabbit_mock.png'),
      },
      {
        cnt: 10,
        name: 'Club 4 Paws',
        image: require('@/assets/img/chicken_mock.png'),
      },
      { cnt: 7, name: 'Лосось ', image: require('@/assets/img/fish_mock.png') },
      {
        cnt: 10,
        name: 'Кролик asd asdasda asdad',
        image: require('@/assets/img/mutton_mock.png'),
      },
      {
        cnt: 13,
        name: 'Баранина ',
        image: require('@/assets/img/rabbit_mock.png'),
      },
      {
        cnt: 10,
        name: 'Club 4 Paws',
        image: require('@/assets/img/chicken_mock.png'),
      },
      { cnt: 7, name: 'Лосось ', image: require('@/assets/img/fish_mock.png') },
      { cnt: 7, name: 'Лосось ', image: require('@/assets/img/fish_mock.png') },
      {
        cnt: 10,
        name: 'Кролик asd asdasda asdad',
        image: require('@/assets/img/mutton_mock.png'),
      },
      {
        cnt: 13,
        name: 'Баранина ',
        image: require('@/assets/img/rabbit_mock.png'),
      },
      {
        cnt: 10,
        name: 'Club 4 Paws',
        image: require('@/assets/img/chicken_mock.png'),
      },
      { cnt: 7, name: 'Лосось ', image: require('@/assets/img/fish_mock.png') },
      { cnt: 7, name: 'Лосось ', image: require('@/assets/img/fish_mock.png') },
      {
        cnt: 10,
        name: 'Кролик asd asdasda asdad',
        image: require('@/assets/img/mutton_mock.png'),
      },
      {
        cnt: 13,
        name: 'Баранина ',
        image: require('@/assets/img/rabbit_mock.png'),
      },
      {
        cnt: 10,
        name: 'Club 4 Paws',
        image: require('@/assets/img/chicken_mock.png'),
      },
      { cnt: 7, name: 'Лосось ', image: require('@/assets/img/fish_mock.png') },
    ]
    const activeValues: Ref<number[]> = ref([])
    const toggle = (idx: number) => {
      if (activeValues.value.includes(idx)) {
        activeValues.value = activeValues.value.filter(
          (item: number) => idx !== item
        )
      } else {
        activeValues.value.push(idx)
      }
    }
    return { activeValues, toggle, items }
  },
})
</script>

<style lang="postcss">
</style>