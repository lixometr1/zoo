<template>
  <div
    class="cabinet-order"
    :class="{
      success: status === 1,
      error: status === 0,
      pending: status === 2,
    }"
  >
    <a
      href="javascript:void(0)"
      class="flex-y-center cursor-pointer py-3 focus:outline-none"
      @click.prevent="toggle"
    >
      <div class="pr-5.5 flex-shrink-0 flex-center sm:pr-3">
        <div class="cabinet-order__status"></div>
      </div>
      <div
        class="flex-1 max-w-[342px] lg:max-w-full lg:mr-4 whitespace-nowrap sm:whitespace-normal"
      >
        <div>
          <span class="font-bold">№ 617 176 418</span>
          <span class="font-medium text-grey text-opacity-50">
            от 21.21.2021
          </span>
        </div>
        <div class="cabinet-order__status-text">
          <span v-if="status === 0">
            <svgCross width="10" class="mr-1.5" />
            {{ $t('orderStatus.canceled') }}
          </span>

          <span v-if="status === 1">
            <svgCheckmark width="10" class="mr-1.5" />
            {{ $t('orderStatus.completed') }}
          </span>
          <span v-if="status === 2">
            {{ $t('orderStatus.pending') }}
          </span>
        </div>
      </div>
      <div class="flex-1 sm:hidden">
        <div class="font-medium text-grey text-opacity-50">
          {{ $t('orderSum') }}
        </div>
        <div>
          <span>{{ orderSum }}</span>
          <span class="font-medium text-grey text-opacity-50">{{
            currency
          }}</span>
        </div>
      </div>
      <div class="ml-auto w-18 h-18 flex-center mr-5.5 sm:hidden">
        <img
          src="@/assets/img/feed_mock.png"
          class="max-h-full max-w-full object-contain"
          alt=""
        />
      </div>
      <div class="flex-center">
        <svgArrowDown
          width="10"
          class="text-grey text-opacity-50 transform transition-all"
          :class="{ 'rotate-180': isOpen }"
        />
      </div>
    </a>
    <CollapseTransition>
      <div v-if="isOpen" class="pt-4 pb-10 flex lg:flex-col sm:pt-2 sm:pb-7">
        <div
          class="w-[330px] flex-shrink-0 lg:w-full mr-14 lg:pr-0 lg:mb-8 sm:mb-6 lg:mr-0"
        >
          <div class="font-bold mb-5">{{ $t('infoAboutOrder') }}</div>
          <div class="font-medium text-grey text-opacity-80 space-y-5">
            <div>ТТН 20400178261753</div>
            <div>На отделение Новой Почты</div>
            <div>
              Черновицкая обл., Черновцы, р-н, Черновцы, отделение №6, ул.
              Школьная, б.1б
            </div>
            <div class="space-y-2">
              <div>Маринович Андрей Валерьевич</div>
              <div>+38 066 367 19 19</div>
              <div>xolxllz@gmail.com</div>
            </div>
          </div>
        </div>
        <CabinetOrdersProducts class="flex-1" />
      </div>
    </CollapseTransition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'
import svgCross from '@/assets/icons/cross.svg?inline'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
import CurrencyModule from '@/store/currency'
import CollapseTransition from '@ivanv/vue-collapse-transition'
import useOpen from '~/utils/compositions/useOpen'
export default defineComponent({
  components: { svgCheckmark, svgCross, svgArrowDown, CollapseTransition },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { item } = toRefs(props)
    const status = computed(() => item.value.status)
    const { isOpen, toggle } = useOpen()
    const orderSum = computed(() => 123.3)
    const currency = computed(() => CurrencyModule.currency)
    return { status, isOpen, toggle, orderSum, currency }
  },
})
</script>

<style lang="postcss">
.cabinet-order {
  @apply px-8  bg-white rounded-lg border border-grey-light sm:px-3.5;
  box-shadow: 10px 10px 40px rgba(62, 63, 67, 0.1);

  &__status {
    @apply rounded-full w-5.5 h-5.5 sm:w-3.5 sm:h-3.5;
  }
  &__status-text {
    @apply font-semibold;
    span {
      @apply flex-y-center;
    }
  }
  &.success & {
    &__status {
      @apply bg-green;
    }
    &__status-text {
      @apply text-green;
    }
  }
  &.error & {
    &__status {
      @apply bg-red;
    }
    &__status-text {
      @apply text-red;
    }
  }
  &.pending & {
    &__status {
      @apply bg-[#B3B8C3];
    }
    &__status-text {
      @apply text-[#B3B8C3];
    }
  }
}
</style>