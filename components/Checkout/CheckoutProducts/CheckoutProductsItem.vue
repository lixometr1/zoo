<template>
  <div
    class="checkout-product w-full py-3.5 border-b border-grey-500 grid grid-cols-5 sm:flex relative sm:py-3"
  >
    <div class="col-auto sm:mr-3">
      <NuxtLink
        :to="link || '#'"
        class="block w-24 h-24 bg-white border border-grey-light rounded-md p-3 flex-center sm:w-14 sm:h-14 sm:p-1"
      >
        <img :src="image" alt="" class="max-w-full max-h-full" />
      </NuxtLink>
    </div>
    <div class="col-span-2 flex flex-col justify-center sm:col-span-1">
      <NuxtLink
        :to="link || '#'"
        class="block text-lg font-bold mb-3 md:text-base sm:text-sm sm:mb-1 sm:leading-5 sm:pr-5"
      >
        {{ title }}
      </NuxtLink>
      <div>
       <CheckoutProductCnt v-model="cntModel"/>
      </div>
    </div>
    <div
      class="flex justify-end flex-col sm:flex-row sm:absolute sm:right-0 sm:bottom-3"
    >
      <div v-if="oldPrice" class="sm:mr-1.5">
        <span class="line-cross text-grey text-opacity-50">
          {{ oldPrice }}
        </span>
      </div>
      <div class="">
        <span
          class="text-2lg leading-6 sm:text-xs sm:font-medium sm:opacity-50"
        >
          {{ price }}
        </span>
        <span class="opacity-50 font-medium">
          {{ currency }}
        </span>
        <span class="hidden sm:inline-block text-grey opacity-50">x {{ cntModel }}</span>
      </div>
    </div>
    <div class="flex flex-col items-end sm:absolute sm:right-0 sm:bottom-7">
      <div class="mt-auto">
        <span class="text-2lg md:text-lg sm:text-sm">{{ total }}</span>
        <span class="opacity-50 font-medium">{{ currency }}</span>
      </div>
    </div>
    <svgCross
      width="14"
      class="cursor-pointer opacity-30 hover:opacity-100 transition-all mt-3 absolute right-0 top-4 sm:top-1 sm:w-2.5"
      @click="removeItem"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgCross from '@/assets/icons/cross.svg?inline'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  components: { svgCross },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    cnt: Number,
  },
  setup(props, { emit }) {
    const image = computed(() => require('@/assets/img/product_mock_2.png'))
    const title = computed(
      () => 'Royal Canin Maxi Adult'
    )
    const price = computed(() => '527')
    const oldPrice = computed(() => '3 276')
    const total = computed(() => '10 500')
    const currency = computed(() => CurrencyModule.currency)
    const link = computed(() => '#')
    const cntModel = computed({
      get() {
        return props.cnt
      },
      set(val) {
        emit('update:cnt', val)
      },
    })
    const removeItem = () => {
      emit('remove')
    }
    return {
      link,
      image,
      title,
      price,
      oldPrice,
      total,
      currency,
      cntModel,
      removeItem,
    }
  },
})
</script>

<style lang="postcss">
.checkout-product {
  .product-cnt-counter {
    @apply w-[120px];
    &__inner {
      @apply py-1;
    }
  }
}
</style>