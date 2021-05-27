<template>
  <div
    class="checkout-card checkout-bonus-progress"
    :class="[isDanger && 'is-danger']"
  >
    <div class="checkout-bonus-progress__header sm:space-x-5">
      <div>
        {{ doneText }}
      </div>
      <div v-html="getText" class="text-right"></div>
    </div>
    <AProgressBar :progress="progress">
      <template #before>
        <div
          class="absolute left-0 top-1/2 transform -translate-y-1/2 flex -space-x-1.5 z-20"
        >
          <div
            v-for="(num, i) in doneCnt"
            :key="i"
            class="checkout-bonus-progress__checkmark"
          >
            <svgCheckmark width="10" />
          </div>
        </div>
      </template>
      <template #after>
        <div
          class="checkout-bonus-progress__checkmark absolute right-0 top-1/2 transform -translate-y-1/2"
        >
          <svgCheckmark width="10" />
        </div>
      </template>
    </AProgressBar>
    <div class="checkout-bonus-progress__footer sm:space-x-4">
      <div>{{ getRequirements }}</div>
      <div>
        <NuxtLink
          to="#"
          class="border-b-2 border-dotted border-grey border-opacity-50 hover:border-green hover:text-green transition-all whitespace-nowrap"
        >
          {{ $t('continueShopping') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'
export default defineComponent({
  components: { svgCheckmark },
  setup() {
    const progress = ref(40)
    const isDanger = ref(false)
    const doneText = computed(() => {
      return 'Бесплатная доставка'
    })
    const getText = computed(() => {
      return 'Еще немного и вы получите скидку <span class="text-green">5%</span>'
    })
    const getRequirements = computed(() => {
      return 'Еще 1 390 грн до бесплатной доставки'
    })
    const doneCnt = computed(() => 2)
    return { progress, isDanger, doneText, getText, doneCnt, getRequirements }
  },
})
</script>

<style lang="postcss">
.checkout-bonus-progress {
  .progress-bar {
    @apply relative;
    &__line {
      @apply h-[12px] sm:h-[10px];
      background: #efefef;
      box-shadow: inset -1px -1px 4px rgba(255, 255, 255, 0.35),
        inset 1px 1px 4px rgba(0, 0, 0, 0.15);
    }
    &__active {
      @apply bg-green;
    }
  }
  &__header {
    @apply flex-y-center justify-between font-bold mb-4;
    > div {
      &:first-child {
        @apply text-green;
      }
    }
  }
  &__footer {
    @apply flex-y-center justify-between mt-4 font-medium;
  }
  &__checkmark {
    @apply w-5 h-5 rounded-full border-2 border-white flex-center text-white bg-green;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    svg {
      @apply w-2.5;
    }
  }
  &.is-danger &__checkmark {
    @apply bg-red-light;
  }
  &.is-danger {
    .progress-bar {
      &__active {
        @apply bg-red-light;
      }
    }
  }
  &.is-danger &__header {
    @apply text-red-light;

    > div {
      &:first-child {
        @apply text-red-light text-2lg;
      }
    }
  }
}
</style>