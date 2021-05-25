<template>
  <div>
    <div v-if="title || $slots.title">
      <slot name="title">
        <h2 class="mb-7 md:mb-4 ">
          {{ title }}
        </h2>
      </slot>
    </div>
    <div class="flex flex-wrap -mx-2.5 xs:no-gutter">
      <div
        v-for="(item, i) in items"
        :key="i"
        class="p-2.5 w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2 xs:p-0"
      >
        <ProductCard v-bind="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: String,
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