<template>
  <CatalogFiltersItem :title="title" :open="true">
    <perfect-scrollbar class="custom-scrollbar max-h-[280px] space-y-1.5 pr-3">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="
          flex-y-center
          select-none
          cursor-pointer
          text-lg
          font-medium
          sm:text-xs
        "
        @click="toggle(idx)"
      >
        <div
          class="
            mr-4
            border border-grey-light
            rounded-md
            w-16
            h-16
            flex-shrink-0
            relative
            flex-center
            bg-white
            sm:w-12
            sm:h-12
            p-1
            sm:mr-2
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
            "
          >
            <svgCheckmark width="10" />
          </div>
          <img :src="item.image" class="object-contain" />
        </div>
        <span class="mr-2 leading-5"> {{ item.name }}</span>
        <span v-if="item.cnt" class="text-grey text-opacity-50">{{
          item.cnt
        }}</span>
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
        name: 'Кролик ',
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
        name: 'Кролик ',
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