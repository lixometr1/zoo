<template>
  <NuxtLink to="#" class="stock-item group">
    <OfferCard v-bind="item.offer" class="mb-5" />
    <div class="font-bold text-grey text-opacity-50 mb-1">
      {{ item.date }}
    </div>
    <h4 v-html="item.title" class="sm:leading-4"></h4>
    <div class="font-medium sm:mt-1.5">
      {{ item.description }}
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
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