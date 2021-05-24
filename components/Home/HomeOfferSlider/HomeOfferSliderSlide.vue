<template>
  <div class="home-offer-slider-slide">
    <OfferCard class="home-offer-card" v-bind="$attrs">
      <template #other>
        <div class="offer-card__prices">
          <div class="offer-card__old-price">
            <span> {{ oldPrice }} {{ currency }}</span>
          </div>

          <div class="offer-card__price">
            <span>{{ price }} {{ currency }}</span>
          </div>
        </div>
        <div class="offer-card__label">{{ $t('shockPrice') }}</div>
      </template>
    </OfferCard>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import CurrencyModule from '@/store/currency'
export default defineComponent({
  inheritAttrs: false,
  props: {
    oldPrice: String,
    price: String,
  },
  setup() {
    const currency = computed(() => CurrencyModule.currency)
    return { currency }
  },
})
</script>

<style lang="postcss">
.home-offer-slider-slide {
  @apply h-full;
  .home-offer-card {
    @apply !shadow-none h-full;
  }
  .offer-card {
    @apply rounded-xl sm:rounded-none;
    &__title {
      @apply text-7xl lg:text-5xl sm:text-3xl xs:text-2xl xs:leading-5;
    }
    &__description {
      @apply text-2lg lg:text-lg sm:text-base xs:text-sm xs:leading-4;
    }
    &__prices {
      @apply absolute right-[70px] bottom-[50px] z-20
            sm:bottom-[20px] sm:right-[30px];
    }
    &__content {
      @apply md:max-w-[350px] xs:max-w-[200px];
    }
    &__price {
      @apply text-4xl relative transform px-5 py-3 text-red flex-center font-extrabold
              lg:text-3xl
              sm:text-2xl sm:px-3 sm:py-1.5
                xs:px-3 xs:py-0.5 xs:text-base;
      transform: rotate(5deg);
      @screen xs {
        transform: none;
      }

      &::before {
        @apply absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-white
                transform -skew-x-12 z-10
                sm:rounded-md;
        content: '';
        box-shadow: inset 0px -5px 1px rgba(0, 0, 0, 0.15);
      }
      span {
        @apply relative z-20;
      }
    }
    &__old-price {
      @apply text-2lg inline-flex items-center justify-center
             relative transform px-7 py-1  
            line-through text-grey
            ml-5
            lg:text-lg
            sm:text-lg sm:px-4 sm:py-0.5 
            xs:px-3 xs:text-xs;
      transform: rotate(-7deg);
      &::before {
        @apply absolute top-0 left-0 right-0 bottom-0 rounded-xl
               transform -skew-x-12 z-10
               sm:rounded-md;
        content: '';
        box-shadow: inset 0px -2px 1px rgba(0, 0, 0, 0.15);
        background: #faff00;
      }
      span {
        @apply relative z-20;
      }
    }
    &__label {
      @apply flex-center absolute top-[35px] right-[42px] rounded-full  
             w-[165px] h-[165px] text-white z-30
             font-bold text-3xl p-3 text-center
             lg:w-[120px] lg:h-[120px] lg:text-2xl 
             md:top-[15px] md:right-[15px]
             sm:w-[90px] sm:h-[90px] sm:p-2 sm:text-lg
             xs:w-[65px] xs:h-[65px] xs:top-[15px] xs:right-[15px] xs:text-sm xs:font-semibold xs:p-0 xs:leading-4;
      transform: rotate(-12deg);
      background: #ff3124;
    }
  }
}
</style>