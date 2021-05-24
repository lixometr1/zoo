<template>
  <div>
    <BrandsItemsTextCards />
    <div class="flex flex-wrap mt-16 xs:mt-10">
      <div v-for="(item, i) in items" :key="i" class="w-1/6 md:w-1/4 sm:w-1/3 xs:w-1/2 pr-2.5 mb-12 sm:mb-9 xs:mb-7">
        <BrandsTextItem v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const cards = [{}, {}, {}]

    return { cards }
  },
})
</script>

<style lang="postcss">
</style>