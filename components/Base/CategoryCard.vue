<template>
  <NuxtLink :to="link || '#'" class="category-card">
    <CategoryImage :src="icon" />
    <div class="mt-6 sm:mt-4 text-2lg sm:text-sm font-medium">
      {{ name }}
    </div>
  </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    name: String,
    icon: String,
    link: [String, Object],
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.category-card {
  @apply block text-center flex-y-center flex-col w-[244px] sm:w-[100px];
}
</style>