<template>
  <a href="#" class="flex-y-center py-4.5 px-5.5" v-on="$listeners" @click.prevent>
    <div class="flex-y-center">
      <component
        :is="item.icon"
        class="mr-4 text-green flex-shrink-0"
        width="18"
      />
      <div class="text-sm font-bold">{{ item.name }}</div>
      <div
        v-if="item.cnt"
        class="ml-2 rounded-full text-xxs bg-green text-white h-3.5 min-w-[14px] leading-none flex-center"
      >
        {{ item.cnt }}
      </div>
    </div>
    <div class="ml-auto flex-shrink-0"><svgArrowRight width="6" /></div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right.svg?inline'
export default defineComponent({
  components: { svgArrowRight },
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