<template>
  <div class="product-delivery" :class="{ open: isOpen }">
    <div class="product-delivery__header" @click="headerClick">
      {{ $t('deliveryToCity') }}:
      <div class="border-circle-green font-bold ml-2">Киев</div>
      <div class="product-delivery__arrow"><svgArrowDown width="10" /></div>
    </div>
    <client-only>
      <CollapseTransition>
        <div v-if="isOpen" class="product-delivery__content">
          <div
            v-for="(item, idx) in items"
            :key="idx"
            class="product-delivery__content-item"
          >
            <div class="flex-y-center flex-1 mr-2 xs:flex-initial">
              <div class="mr-7 flex-shrink-0 w-20 sm:mr-0 sm:flex-initial">
                <img
                  :width="item.imageWidth"
                  :src="item.image"
                  alt="nova-poshta"
                />
              </div>
              <div class="font-medium sm:hidden">
                {{ item.deliveryCompany }}
              </div>
            </div>
            <div
              class="flex-y-center justify-between flex-1 sm:flex-col sm:items-end sm:text-right"
            >
              <div class="font-bold sm:order-2">{{ item.deliveryTime }}</div>
              <div class="whitespace-nowrap">
                <template v-if="item.isFree">
                  <span>{{ $t('free') }}</span>
                </template>
                <template v-else>
                  <span>{{ item.price }}</span>
                  <span class="text-grey text-opacity-50">{{ currency }}</span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </CollapseTransition>
    </client-only>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { CollapseTransition } from '@ivanv/vue-collapse-transition'

import CurrencyModule from '@/store/currency'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
import useOpen from '~/utils/compositions/useOpen'

import useResizeValue from '~/utils/compositions/useResizeValue'
import useResize from '~/utils/compositions/useResize'
export default defineComponent({
  components: { svgArrowDown, CollapseTransition },
  setup() {
    const items = [
      {
        image: require('@/assets/icons/nova_poshta.svg'),
        deliveryCompany: 'Нова пошта',
        deliveryTime: 'Відправимо 4 лютого',
        price: '~124',
        imageWidth: 75,
      },
      {
        image: require('@/assets/icons/ukr_poshta.svg'),
        deliveryCompany: 'Укрпошта',
        deliveryTime: 'Відправимо 4 лютого',
        price: '~88',
        imageWidth: 83,
      },
      {
        image: require('@/assets/icons/justin.svg'),
        deliveryCompany: 'Justin',
        deliveryTime: 'Відправимо 4 лютого',
        price: '~76',
        imageWidth: 69,
      },
      {
        image: require('@/assets/icons/logo.svg'),
        deliveryCompany: 'Самовывоз из магазина',
        deliveryTime: 'Сьогодні',
        isFree: true,
        imageWidth: 51,
      },
    ]
    const currency = computed(() => {
      return CurrencyModule.currency
    })
    const { isOpen, toggle, close, open } = useOpen()
    const isMobile = ref(false)
    useResize((wWidth) => {
      if (wWidth < 760) {
        isMobile.value = true
        close()
      } else {
        isMobile.value = false
        open()
      }
    })
    const headerClick = () => {
      if (isMobile.value) {
        toggle()
      }
    }
    return { items, currency, isOpen, headerClick, isMobile }
  },
})
</script>

<style lang="postcss">
.product-delivery {
  @apply text-sm xs:text-xs relative;
  &__header {
    @apply border border-grey-light px-7 py-4.5 sm:px-4.5
          flex-y-center sm:cursor-pointer rounded-lg select-none;
    background: #f8f8f8;
  }
  &__content {
    @apply border-l border-r border-b border-grey-light bg-white rounded-br-lg rounded-bl divide-y divide-grey-light
          sm:absolute z-20 left-0 right-0;
    &-item {
      @apply px-7 py-3  flex items-center sm:px-4.5;
    }
  }
  &__arrow {
    @apply hidden sm:block ml-auto text-grey opacity-50 transition;
  }
  &.open &__header {
    @apply rounded-b-none;
  }
  &.open &__arrow {
    @apply opacity-100 transform rotate-180;
  }
}
</style>