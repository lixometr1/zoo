<template>
  <div>
    <NuxtLink to="#" class="text-blue font-bold text-lg leading-none">
      {{ title }}
      <svgArrowRight width="6" class="ml-1.5 inline-block" />
    </NuxtLink>
    <div class="space-y-0.5 mt-2">
      <NuxtLink
        v-for="(subCategory, idx) in subCategories"
        :key="idx"
        to="#"
        class="block text-grey text-opacity-80 hover:text-green"
      >
        {{ subCategory.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right_triangle.svg?inline'
export default defineComponent({
  components: { svgArrowRight },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { item } = toRefs(props)
    const subCategories = computed(() => {
      return item.value.children || []
    })
    const title = computed(() => {
      return item.value.name
    })
    return { subCategories, title }
  },
})
</script>

<style lang="postcss">
</style>