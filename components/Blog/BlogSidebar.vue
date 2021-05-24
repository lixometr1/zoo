<template>
  <div>
    <h1 class="mb-10 md:mb-3.5">{{ $t('articlesMany') }}</h1>
    <BlogCategories class="md:hidden" :items="categories" />
    <BlogCategoriesMob class="hidden md:block" :items="categories" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    categories: {
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