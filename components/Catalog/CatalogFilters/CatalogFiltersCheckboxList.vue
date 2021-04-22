<template>
  <div>
    <perfect-scrollbar class="custom-scrollbar max-h-[270px] space-y-1.5">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="flex-y-center select-none cursor-pointer text-base font-medium"
        @click="toggle(idx)"
      >
        <ACheckbox class="mr-2" :value="activeValues.includes(idx)" />
        <span class="mr-2"> {{ item.name }}</span>
        <span v-if="item.cnt" class="text-grey text-opacity-50">{{
          item.cnt
        }}</span>
      </div>
    </perfect-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const activeValues: Ref<number[]> = ref([])
    const toggle = (idx: number) => {
      if (activeValues.value.includes(idx)) {
        activeValues.value = activeValues.value.filter(
          (item: number) => idx !== item
        )
      } else {
        activeValues.value.push(idx)
      }
    }
    return { activeValues, toggle }
  },
})
</script>

<style lang="postcss">
</style>