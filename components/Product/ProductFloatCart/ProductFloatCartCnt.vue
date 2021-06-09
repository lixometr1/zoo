<template>
  <div class="product-float-cart-cnt">
    <div class="select-none cursor-pointer flex-center group" @click="minus">
      <svgMinus
        width="12"
        class="text-grey opacity-50 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <div class="text-2lg font-medium sm:text-base flex-center select-none mx-5.5 sm:mx-3 sm:text-base">
      {{ value }}
    </div>
    <div class="select-none cursor-pointer flex-center group" @click="plus">
      <svgPlus
        width="12"
        class="text-grey opacity-50 group-hover:opacity-100 transition-opacity"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgMinus from '@/assets/icons/minus.svg?inline'
import svgPlus from '@/assets/icons/plus.svg?inline'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  components: { svgMinus, svgPlus },
  props: {
    value: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props)
    const plus = () => {
      emit('input', value?.value + 1)
    }
    const minus = () => {
      if (value.value < 2) return
      emit('input', value.value - 1)
    }
    const currency = computed(() => CurrencyModule.currency)
    return { minus, plus, currency }
  },
})
</script>

<style lang="postcss">
.product-float-cart-cnt {
  @apply w-[122px] relative rounded-tl-full rounded-bl-full h-10 bg-white flex items-stretch justify-between 
          px-3.5 border sm:py-1 border-grey-500;
  box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.05),
    5px 5px 20px rgba(0, 0, 0, 0.1);
}
</style>