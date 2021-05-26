<template>
  <div
    class="checkout-product w-full py-3.5 border-b border-grey-500 grid grid-cols-5"
  >
    <div class="col-auto">
      <NuxtLink
        :to="link || '#'"
        class="block w-24 h-24 bg-white border border-grey-light rounded-md p-3 flex-center"
      >
        <img :src="image" alt="" class="max-w-full max-h-full" />
      </NuxtLink>
    </div>
    <div class="col-span-2 flex flex-col justify-center">
      <NuxtLink :to="link || '#'" class="block text-lg font-bold mb-3">
        {{ title }}
      </NuxtLink>
      <div>
        <ProductCntCounter
          v-model="cntModel"
          class="checkout-product__cnt"
          :showInfo="false"
        />
      </div>
    </div>
    <div class="flex justify-end flex-col">
      <div v-if="oldPrice">
        <span class="line-cross text-grey text-opacity-50">
          {{ oldPrice }}</span
        >
      </div>
      <div>
        <span class="text-2lg leading-6"> {{ price }}</span>
        <span class="opacity-50 font-medium">
          {{ currency }}
        </span>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <svgCross
        width="14"
        class="cursor-pointer opacity-30 hover:opacity-100 transition-all mt-3"
        @click="removeItem"
      />
      <div class="mt-auto">
        <span class="text-2lg">{{ total }}</span>
        <span class="opacity-50 font-medium">{{ currency }}</span>
      </div>
    </div>
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
    const title = computed(() => 'Royal Canin Maxi Adult')
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