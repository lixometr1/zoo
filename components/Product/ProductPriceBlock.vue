<template>
  <div class="flex items-center pb-5 border-b border-grey-light lg:flex-col lg:items-stretch">
    <div class="pr-5 lg:mb-5">
      <ProductPrice
        :price="price"
        :oldPrice="oldPrice"
        :sale="sale"
        :showPiece="true"
      />
    </div>
    <div class="flex justify-end space-x-2 flex-1 max-h-[60px] lg:justify-start">
      <ProductCntCounter class="w-[110px]" v-model="cnt" />
      <button
        class="btn-green-stroke whitespace-nowrap lg:px-2 flex-1 max-w-[170px] lg:max-w-none"
        @click.prevent="buyOneClick"
      >
        {{ $t('buyOneClick') }}
      </button>
      <button class="btn-green flex-1 max-w-[170px] lg:max-w-none" @click.prevent="addToCard">
        {{ $t('toCart') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    price: [Number, String],
    oldPrice: [Number, String],
    sale: Number,
  },
  setup() {
    const buyOneClick = () => {}
    const addToCard = () => {}
    const cnt = ref(1)
    return { buyOneClick, addToCard, cnt }
  },
})
</script>

<style lang="postcss">
</style>