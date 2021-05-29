<template>
  <div
    class="cabinet-personal-data-card cabinet-personal-data-bonus-collapse !p-0"
  >
    <div class="cursor-pointer px-5.5 py-3" @click="toggle">
      <div
        class="flex justify-between font-medium text-xs text-grey text-opacity-70"
      >
        <span> {{ $t('onBonusBalance') }}</span>
        <svgArrowDown
          width="8"
          class="transition-all"
          :class="{ 'transform rotate-180': isOpen }"
        />
      </div>
      <div class="mt-2">
        <span class="text-2lg font-light">{{ bonusBalance }}</span>
        <span class="font-medium text-grey text-opacity-50 text-xs">{{
          currency
        }}</span>
      </div>
    </div>
    <CollapseTransition>
      <div v-if="isOpen">
        <div class="border-t border-grey-light px-5.5 py-2.5">
          <div>
            <div class="text-xs font-medium text-grey text-opacity-70">
              {{ $t('availableToUse') }}
            </div>
            <div class="font-light">
              <span class="text-base">{{ availableBalance }}</span>
              <span class="text-grey text-opacity-50">{{ currency }}</span>
            </div>
          </div>
        </div>
        <div class="border-t border-grey-light px-5.5 py-2.5">
          <div>
            <div class="text-xs font-medium text-grey text-opacity-70">
              {{ $t('willBeAvailableThrough') }}
              <span class="lowercase text-green font-bold"
                >{{ willAvailableThrough }} {{ daySclon }}</span
              >
            </div>
            <div class="font-light">
              <span class="text-base">{{ willAvailableBalance }}</span>
              <span class="text-grey text-opacity-50">{{ currency }}</span>
            </div>
          </div>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down_triangle.svg?inline'
import { CollapseTransition } from '@ivanv/vue-collapse-transition'

import useOpen from '~/utils/compositions/useOpen'
export default defineComponent({
  components: { svgArrowDown, CollapseTransition },
  props: {
    bonusBalance: [String, Number],
    currency: String,
    availableBalance: [String, Number],
    willAvailableBalance: [String, Number],
    willAvailableThrough: [String, Number],
    daySclon: String,
  },
  setup() {
    const { isOpen, toggle } = useOpen()
    return { isOpen, toggle }
  },
})
</script>

<style lang="postcss">
.cabinet-personal-data-bonus {
}
</style>
