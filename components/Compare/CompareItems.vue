<template>
  <div>
    <perfect-scrollbar
      class="custom-scrollbar pb-18 md:pb-12 sm:pb-7"
      :options="{ wheelPropagation: true }"
    >
      <div class="flex md:pl-[180px] sm:pl-[140px]">
        <CompareItem
          v-for="(item, i) in items"
          :key="i"
          :isMain="mainItem === i"
          @main="makeMain(i)"
        />
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [{}, {}, {}, {}, {}, {}, {}]
    const mainItem = ref(0)
    const makeMain = (idx: number) => {
      mainItem.value = idx
    }
    return { items, makeMain, mainItem }
  },
})
</script>

<style lang="postcss">
</style>