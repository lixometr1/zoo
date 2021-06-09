<template>
  <transition name="t-fade">
    <div
      v-if="isShow"
      class="product-float-cart"
      :class="{ 'is-adding': isAdding }"
    >
      <div class="flex-y-center z-50 relative">
        <ProductFloatCartCnt v-if="isAdding" v-model="cnt" class="z-20 -mr-2" />
        <ProductFloatCartBtn
          class="product-float-cart__btn z-30 flex-shrink-0"
          @click="handleBtnClick"
        />
      </div>
      <div
        v-if="isAdding"
        class="product-float-cart__overlay"
        @click="resetAdding"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  ref,
  watch,
} from '@nuxtjs/composition-api'
import useStopScroll from '~/utils/compositions/useStopScroll'

export default defineComponent({
  setup() {
    const cnt = ref(1)
    const product = inject('product')
    const hasVariations = computed(() => false)
    const isAdding = ref(false)
    const { stop: stopScroll, reset: resetScroll } = useStopScroll()
    watch(isAdding, () => {
      if (isAdding.value) stopScroll()
      else resetScroll()
    })
    const resetAdding = () => {
      isAdding.value = false
    }
    const handleBtnClick = () => {
      if (!isAdding.value) {
        if (hasVariations.value) {
          window.scrollTo({ top: 200, behavior: 'smooth' })
        } else {
          isAdding.value = true
        }
        return
      }
      // add to cart
      isAdding.value = false
    }
    const triggerBlock = ref()
    const isShow = ref(false)

    const checkShow = () => {
      const rect = triggerBlock.value.getBoundingClientRect()
      if (rect.top + rect.height < 0) {
        isShow.value = true
      } else {
        isShow.value = false
      }
    }

    onMounted(() => {
      triggerBlock.value = document.querySelector('#product-price-block')
      window.addEventListener('scroll', () => {
        checkShow()
      })
    })
    return { isAdding, resetAdding, handleBtnClick, cnt, isShow }
  },
})
</script>

<style lang="postcss">
.product-float-cart {
  @apply fixed right-4 bottom-4 z-100;
  &__overlay {
    @apply fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-grey bg-opacity-20 z-30;
  }
  &.is-adding & {
    &__btn {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        #20bd56;
    }
  }
}
</style>