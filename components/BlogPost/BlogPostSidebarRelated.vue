<template>
  <div class="py-2">
    <NuxtLink
      v-for="(item, i) in items"
      :key="i"
      to="#"
      class="flex-y-center group py-1.5 px-7"
    >
      <img class="w-18 h-18 object-cover rounded-lg flex-shrink-0" :src="item.image" alt="" />
      <div
        class="ml-5 pr-3 leading-5 text-base font-bold group-hover:text-green group-hover:underline transition-all"
      >
        {{ item.title }}
      </div>
      <div
        class="w-7 h-7 rounded-full shadow-arrow ml-auto flex-center flex-shrink-0 group-hover:text-white group-hover:bg-green transition-all"
      >
        <svgArrowRight width="8" />
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right_bold.svg?inline'
export default defineComponent({
  components: { svgArrowRight },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>