<template>
  <div class="checkout-delivery-type pb-5.5 border-b border-grey-light">
    <div class="font-bold mb-3.5">
      {{ $t('deliveryWay') }} <span class="text-red">*</span>
    </div>
    <ARadioGroup v-model="typeModel" :items="types">
      <template #label="{ item }">
        <span v-if="item.type !== 'tooltip'">
          {{ item.label }}
        </span>
        <span v-else class="flex-y-center relative">
          {{ item.label }}
          <span
            class="checkout-delivery-type__tooltip-trigger ml-3 flex-center w-4 h-4 bg-green bg-opacity-50 text-white rounded-full hover:bg-opacity-100 transition-all"
          >
            <svgInfo width="3" />
          </span>
          <span class="checkout-delivery-type__tooltip">{{
            $t('checkoutSelfDeliveryTooltip')
          }}</span>
        </span>
      </template>
    </ARadioGroup>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgInfo from '@/assets/icons/info.svg?inline'
export default defineComponent({
  components: { svgInfo },
  props: {
    value: {
      type: [String, Number],
    },
  },
  setup(props, { emit }) {
    const types = computed(() => [
      {
        label: '«Новая почта» на отделение',
        value: 1,
      },
      {
        label: '«Укрпошта» на отделение',
        value: 2,
      },
      {
        label: '«Justin» на отделение',
        value: 3,
      },
      {
        label: 'Самовывоз из магазина',
        value: 4,
        type: 'tooltip',
      },
    ])
    const typeModel = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('input', val)
      },
    })
    return { types, typeModel }
  },
})
</script>

<style lang="postcss">
.checkout-delivery-type {
  &__tooltip {
    @apply absolute -top-4 transform -translate-y-full translate-x-full right-9
          w-[240px]
          bg-white py-4.5 px-5 border border-grey-light
          text-grey text-opacity-50 text-sm leading-4 opacity-0 transition-all invisible;
    &::before {
      content: '';
      @apply absolute bottom-0 transform translate-y-full left-[10%] w-[18px] h-[20px];
      background: url(~@/assets/icons/tooltip_arrow.svg) center center no-repeat;
    }
  }
  &__tooltip-trigger:hover + &__tooltip {
    @apply opacity-100 visible;
  }
}
</style>