<template>
  <form action="#" class="flex-y-center relative" @submit.prevent="search">
    <input
      v-model="phrase"
      class="flex-1 px-7 py-3 border bg-white border-grey-light rounded-md focus:outline-none font-medium sm:text-sm sm:rounded-full sm:py-3 sm:px-5"
      type="text"
      :placeholder="$t('articlesSearch')"
    />
    <div
      class="ml-4.5 w-6 cursor-pointer sm:absolute right-3.5 sm:w-4.5"
      @click="search"
    >
      <svgSearch />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgSearch from '@/assets/icons/search.svg?inline'
export default defineComponent({
  components: { svgSearch },
  setup() {
    const phrase = ref('')
    const search = () => {}
    return { phrase, search }
  },
})
</script>

<style lang="postcss">
</style>