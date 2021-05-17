<template>
  <div
    class="flex items-center pb-5 border-b border-grey-light lg:flex-col lg:items-stretch relative sm:border-none sm:pb-0"
  >
    <div class="pr-5 lg:mb-5 flex-y-center flex-1 lg:pr-0">
      <ProductPrice
        :price="price"
        :oldPrice="oldPrice"
        :sale="sale"
        :showPiece="true"
      />
      <ProductCntCounter v-model="cnt" class="w-[110px] max-h-[60px] sm:max-h-[38px] ml-auto" />
    </div>

    <div class="relative">
      <div
        class="flex justify-end space-x-2 w-full lg:justify-start relative sm:flex-col sm:space-x-0 sm:space-y-1.5"
      >
        <button
          class="btn-green-stroke buy-one-click-btn whitespace-nowrap lg:px-2 flex-1 max-w-[170px] lg:max-w-none sm:text-sm sm:max-w-full"
          :class="{ '!bg-green !bg-opacity-10 !text-green': showOneClickPopup }"
          @click.prevent="oneClickToggle"
        >
          {{ $t('buyOneClick') }}
        </button>
        <button
          class="btn-green flex-1 w-[170px] lg:max-w-none sm:text-sm sm:w-full"
          @click.prevent="addToCard"
        >
          {{ $t('toCart') }}
        </button>
      </div>
    </div>
    <transition name="t-fade">
      <ProductOneClickPopup
        v-if="showOneClickPopup"
        v-click-outside="{
          handler: oneClickClose,
          middleware: clickOutsideMiddleware,
        }"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import useOpen from '~/utils/compositions/useOpen'

export default defineComponent({
  props: {
    price: [Number, String],
    oldPrice: [Number, String],
    sale: Number,
  },
  setup() {
    const {
      isOpen: showOneClickPopup,
      toggle: oneClickToggle,
      close: oneClickClose,
    } = useOpen()

    const addToCard = () => {}
    const cnt = ref(1)
    const clickOutsideMiddleware = (e: MouseEvent) => {
      return !(e.target as HTMLElement)?.className?.includes(
        'buy-one-click-btn'
      )
    }
    return {
      clickOutsideMiddleware,
      addToCard,
      cnt,
      showOneClickPopup,
      oneClickToggle,
      oneClickClose,
    }
  },
})
</script>

<style lang="postcss">
</style>