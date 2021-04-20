<template>
  <div class="flex items-center">
    <input
      v-model="text"
      type="text"
      class="rounded-full py-3 px-7 bg-grey-light bg-opacity-70 border-grey-light border mr-6 focus:outline-none flex-1"
      placeholder="Здесь может быть ваш запрос, например: Корм для собак"
      @keypress.enter="search"
    />
    <div class="cursor-pointer" @click="search">
      <svgSearch width="24" class="text-grey" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgSearch from '@/assets/icons/search.svg?inline'
export default defineComponent({
  components: { svgSearch },
  setup() {
    const text = ref('')
    const search = () => {}
    return {
      search,
      text,
    }
  },
})
</script>

<style lang="postcss">
</style>