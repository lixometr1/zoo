<template>
  <div>
    <ProductCntCounter
      v-model="valueModel"
      class="checkout-product__cnt sm:hidden md:h-12"
      :showInfo="false"
    />
    <CustomSelect
      v-model="valueModel"
      :items="cntOptions"
      class="hidden sm:block w-[70px]"
    >
      <template #label="{ activeItem, isOpen }">
        <div
          class="w-full bg-grey-600 rounded-md border border-grey-light text-grey text-opacity-50 pl-4.5 pr-4 py-1.5 flex-y-center justify-between text-sm font-medium"
        >
          {{ activeItem.name }}
          <svgArrowDown
            width="10"
            class="transform transition-all"
            :class="{ 'rotate-180': isOpen }"
          />
        </div>
      </template>
    </CustomSelect>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'

import CustomSelect from '~/components/Base/CustomSelect.vue'
export default defineComponent({
  components: { CustomSelect, svgArrowDown },
  props: {
    value: Number,
  },
  setup(props, { emit }) {
    const valueModel = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('input', val)
      },
    })
    const cntOptions = computed(() => {
      const arr = []
      for (let i = 1; i <= 10; i++) {
        arr.push(i)
      }
      return arr.map((item: number) => ({ name: item, value: item }))
    })
    return { valueModel, cntOptions }
  },
})
</script>

<style lang="postcss">
</style>