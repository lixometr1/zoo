<template>
  <div
    class="cabinet-personal-data-card cabinet-personal-data-bonus-card !p-0 flex divide-x divide-grey-light"
  >
    <div class="cabinet-personal-data-bonus-card__item">
      <div>
        <div class="cabinet-personal-data-bonus-card__title">
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
    <div class="cabinet-personal-data-bonus-card__item">
      <div>
        <div class="cabinet-personal-data-bonus-card__title">
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
    <div class="cabinet-personal-data-bonus-card__item">
      <div>
        <div class="cabinet-personal-data-bonus-card__title">
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
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    bonusBalance: [String, Number],
    currency: String,
    availableBalance: [String, Number],
    willAvailableBalance: [String, Number],
    willAvailableThrough: [String, Number],
    daySclon: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.cabinet-personal-data-bonus-card {
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