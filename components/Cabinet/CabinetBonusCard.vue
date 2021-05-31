<template>
  <div class="cabinet-bonus-card !p-0 flex divide-x divide-grey-light">
    <div class="cabinet-bonus-card__item">
      <div>
        <div class="cabinet-bonus-card__title">
          {{ $t('onBonusBalance') }}
        </div>
        <div>
          <span class="text-2lg text-green font-medium">{{
            bonusBalance
          }}</span>
          <span class="font-medium text-grey text-opacity-50">{{
            currency
          }}</span>
        </div>
      </div>
    </div>
    <div class="cabinet-bonus-card__item">
      <div>
        <div class="cabinet-bonus-card__title">
          {{ $t('availableToUse') }}
        </div>
        <div>
          <span class="text-2lg font-medium">{{ availableBalance }}</span>
          <span class="font-medium text-grey text-opacity-50">{{
            currency
          }}</span>
        </div>
      </div>
    </div>
    <div class="cabinet-bonus-card__item">
      <div>
        <div class="cabinet-bonus-card__title">
          {{ $t('willBeAvailableThrough') }}
          <span class="lowercase text-green font-bold"
            >{{ willAvailableThrough }} {{ daySclon }}</span
          >
        </div>
        <div>
          <span class="text-2lg font-medium">{{ willAvailableBalance }}</span>
          <span class="font-medium text-grey text-opacity-50">{{
            currency
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
import useWordSclon from '~/utils/compositions/useWordSclon'
export default defineComponent({
  inheritAttrs: false,
  props: {
    bonusBalance: [String, Number],
    availableBalance: [String, Number],
    willAvailableBalance: [String, Number],
    willAvailableThrough: {
      required: true,
      type: Number,
    },
  },
  setup(props) {
    const { willAvailableThrough } = toRefs(props)
    const daysSclon = (useContext().i18n.t('days') as any) as string[]
    const daySclon = computed(() => {
      const { exec } = useWordSclon(daysSclon)
      return exec(willAvailableThrough.value)
    })
    const currency = computed(() => CurrencyModule.currency)
    return { daySclon, currency }
  },
})
</script>

<style lang="postcss">
.cabinet-bonus-card {
  @apply bg-white py-7 px-9 border border-grey-light rounded-xl sm:p-5.5 sm:rounded-lg;
  box-shadow: 10px 10px 40px rgba(62, 63, 67, 0.1);
  &__item {
    @apply py-10 flex-center px-7 flex-1;
    > div {
      @apply max-w-[120px];
    }
  }
  &__title {
    @apply font-medium text-sm text-grey text-opacity-70 mb-2 leading-4;
  }
}
</style>