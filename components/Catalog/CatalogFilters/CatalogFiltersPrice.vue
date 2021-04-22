<template>
  <CatalogFiltersItem :title="$t('price')" :open="true">
    <div class="pt-4">
      <VueRangeSlider
        v-model="prices"
        class="custom-range-slider"
        :tooltip="'none'"
      ></VueRangeSlider>
      <div class="flex-y-center mt-6">
        <input
          class="filters-price-input"
          :value="prices[0]"
          type="text"
          @input="onPrice1($event.target.value)"
        />
        <div class="mx-4 text-grey text-opacity-50">-</div>
        <input
          class="filters-price-input"
          :value="prices[1]"
          type="text"
          @input="onPrice2($event.target.value)"
        />
      </div>
    </div>
  </CatalogFiltersItem>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const prices = ref([10, 30])
    const onPrice1 = (val: string) => {}
    const onPrice2 = (val: string) => {}
    return { prices, onPrice1, onPrice2 }
  },
})
</script>

<style lang="postcss">
.filters-price-input {
  @apply block py-3 border border-grey-light rounded-md text-center font-medium focus:outline-none min-w-0;
}
</style>