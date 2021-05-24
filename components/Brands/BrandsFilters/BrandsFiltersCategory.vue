<template>
  <div class="h-full">
    <ASelect
      class="w-[230px] h-full sm:hidden"
      selectClass="h-full"
      :placeholder="$t('chooseCategory')"
      :options="items"
    />
    <MobileSelect class="sm:block hidden" :items="items">
      <div class="flex-y-center">
        <svgBurger width="18" class="text-green" />
        <span class="font-bold ml-2 text-xs">{{ $t('byCategory') }}</span>
      </div>
    </MobileSelect>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgBurger from '@/assets/icons/burger.svg?inline'

export default defineComponent({
  components: {
    svgBurger,
  },
  setup() {
    const items = ['Test', 'Test 1', 'Test 2']
    return { items }
  },
})
</script>

<style lang="postcss">
</style>