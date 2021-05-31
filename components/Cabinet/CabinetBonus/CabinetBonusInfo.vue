<template>
  <div class="cabinet-bonus-info">
    <h3 class="mb-8 md:mb-5 sm:mb-3">
      {{ $t('bonusBill') }}
    </h3>
    <CabinetBonusCard v-bind="balanceData" />
    <div class="w-[260px] mt-8 md:mt-5 sm:mt-3 sm:text-sm xs:w-full">
      <NuxtLink v-if="hasBonuses" :to="localePath('/')" class="btn-green">
        {{ $t('spendBonuses') }}
      </NuxtLink>
      <NuxtLink v-else :to="localePath('/')" class="btn-green">
        {{ $t('getFirstBonuses') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const bonusBalance = computed(() => 134.53)
    const availableBalance = computed(() => 0)
    const willAvailableBalance = computed(() => 134)
    const willAvailableThrough = computed(() => 25)

    const balanceData = computed(() => ({
      bonusBalance: bonusBalance.value,
      availableBalance: availableBalance.value,
      willAvailableBalance: willAvailableBalance.value,
      willAvailableThrough: willAvailableThrough.value,
    }))
    const hasBonuses = computed(() => true)
    return { balanceData, hasBonuses }
  },
})
</script>

<style lang="postcss">
.cabinet-bonus-info {
  .cabinet-bonus-card {
    @apply max-w-[520px] sm:flex-col divide-y;
    &__item {
      @apply px-5.5 py-3 sm:items-start sm:justify-start;
      > div {
        @apply max-w-[250px];
      }
    }
  }
}
</style>