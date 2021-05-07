<template>
  <div class="w-1/5 lg:w-1/4 md:w-1/3 xs:w-1/2">
    <router-link :to="item.link || '#'">
      <CategoryImage class="w-full" :src="item.image" />
    </router-link>
    <router-link
      class="block mt-7 md:mt-3  text-blue text-2lg mb-3.5 font-bold leading-6 md:text-lg md:leading-5 sm:text-base sm:leading-4"
      :to="item.link || '#'"
    >
      {{ item.title }}
      <svgArrowRight width="8" class="inline-block ml-2" />
    </router-link>
    <div class="space-y-0.5">
      <router-link
        class="block text-grey hover:text-blue transition-colors"
        v-for="(child, idx) in item.children"
        :key="idx"
        :to="child.link || '#'"
      >
        {{ child.title }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right_triangle.svg?inline'
export default defineComponent({
  components: { svgArrowRight },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>