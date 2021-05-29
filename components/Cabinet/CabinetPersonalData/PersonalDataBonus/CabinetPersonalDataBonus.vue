<template>
  <div>
    <CabinetPersonalDataBonusCard v-if="isDesktop" v-bind="balanceData" />
    <CabinetPersonalDataBonusCollapse v-else v-bind="balanceData" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
import useWordSclon from '~/utils/compositions/useWordSclon'
import useResizeValue from '~/utils/compositions/useResizeValue'
import { Breakpoints } from '~/types/constants'
export default defineComponent({
  setup() {
    const bonusBalance = computed(() => 134.53)
    const availableBalance = computed(() => 0)
    const willAvailableBalance = computed(() => 134)
    const willAvailableThrough = computed(() => 25)
    const daysSclon = (useContext().i18n.t('days') as any) as string[]
    const daySclon = computed(() => {
      const { exec } = useWordSclon(daysSclon)
      return exec(willAvailableThrough.value)
    })
    const currency = computed(() => CurrencyModule.currency)
    const { value: isDesktop } = useResizeValue((wWidth) => {
      return wWidth > Breakpoints.md
    })
    const balanceData = computed(() => ({
      bonusBalance: bonusBalance.value,
      currency: currency.value,
      availableBalance: availableBalance.value,
      willAvailableBalance: willAvailableBalance.value,
      willAvailableThrough: willAvailableThrough.value,
      daySclon: daySclon.value,
    }))
    return {
      isDesktop,
      balanceData,
    }
  },
})
</script>

<style lang="postcss">
</style>
