<template>
  <div class="flex justify-between items-center mb-8">
    <div class="flex items-baseline">
      <h2 class="mr-4">Корм и лакомства для кошек</h2>
      <span class="text-grey text-opacity-50"> 1928 {{ $t('items[2]') }} </span>
    </div>
    <div>
      <div class="flex items-center font-medium">
        <span class="text-opacity-50 text-grey">{{ $t('sort') }}:</span>
        <div class="w-[220px] ml-3">
          <ASelect :value="'По умолчанию'" :options="['По умолочанию', 'По возрастанию']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>