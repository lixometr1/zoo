<template>
  <div class="h-full">
    <ASelect
      class="h-full w-[150px] sm:hidden"
      selectClass="h-full"
      :placeholder="$t('byLetter')"
      :options="items"
    />
    <MobileSelect class="sm:block hidden" :items="items">
      <div class="flex-y-center">
        <svgLetter width="18" class="text-green" />
        <span class="font-bold ml-2 text-xs">{{ $t('byLetter') }}</span>
      </div>
    </MobileSelect>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgLetter from '@/assets/icons/letter.svg?inline'
export default defineComponent({
  components: { svgLetter },
  setup() {
    const items = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    return { items }
  },
})
</script>

<style lang="postcss">
</style>