<template>
  <div class="product-cnt-counter">
    <div class="product-cnt-counter__inner">
      <div
        class="select-none cursor-pointer flex-center group"
        @click="minus"
      >
        <svgMinus
          width="12"
          class="text-grey opacity-50 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div class="text-2lg font-medium sm:text-base flex-center select-none">
        {{ value }}
      </div>
      <div
        class="select-none cursor-pointer  flex-center group"
        @click="plus"
      >
        <svgPlus
          width="12"
          class="text-grey opacity-50 group-hover:opacity-100 transition-opacity"
        />
      </div>
    </div>
    <div v-if="showInfo" class="product-cnt-counter__tooltip">
      {{ $t('onSum') }}: {{ cntPrice }} {{ currency }}
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
    cntPrice: {
      type: [Number, String],
      default: '9 822',
    },
    showInfo: {
      type: Boolean,
      default: true,
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
.product-cnt-counter {
  @apply relative;
  &__tooltip {
    @apply hidden absolute transform  
    w-[220px] items-center justify-center
    border-4 border-white 
   -left-8 -top-6 -translate-y-full
   text-base font-medium text-center
   py-3 px-4
   lg:right-0 lg:left-auto
   sm:w-[180px]
   sm:left-auto sm:right-0
   sm:py-3 
    sm:text-sm;
    background: #f8f8f8;
    box-shadow: 10px 10px 70px rgba(62, 63, 67, 0.2);
    &::before {
      @apply w-[36px] h-[17px] absolute bottom-0 transform rotate-180 translate-y-full left-[30%]
            lg:left-auto right-[15%];
      content: '';
      background: url(~@/assets/icons/one_click_buy_arrow.svg) center center
        no-repeat;
    }
  }
  &__inner {
    @apply rounded-md h-full w-full bg-white flex items-stretch justify-between 
          px-4.5 py-4 border sm:py-1 border-grey-500;
  }
  &:hover &__inner {
    background: #f8f8f8;
  }
  &:hover &__tooltip {
    @apply flex;
  }
}
</style>