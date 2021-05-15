<template>
  <div
    class="bg-white border border-grey-light rounded-2xl px-14 py-5 flex-y-center justify-between"
  >
    <div>
      <div class="text-grey text-opacity-50 font-medium mb-1.5">
        {{ $t('productRating') }}
      </div>
      <div class="text-3xl font-bold">3.2</div>
      <StarsPanel
        class="mt-3"
        :stars="3"
        :strokeClass="'text-opacity-50 text-grey'"
      >
        <div class="text-lg ml-2 leading-none transform translate-y-0.5">
          <b>{{ totalReviews }}</b>
          <span class="text-grey text-opacity-50 lowercase">{{ reviewText }}</span>
        </div>
      </StarsPanel>
    </div>
    <div>
      <ProductReviewsStats />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import useWordSclon from '~/utils/compositions/useWordSclon'

export default defineComponent({
  setup() {
    const totalReviews = computed(() => 153)
    const reviewsSclon = (useContext().i18n.t('reviews') as any) as string[]
    const reviewText = computed(() => {
      const { exec } = useWordSclon(reviewsSclon)
      return exec(totalReviews.value)
    })
    return { reviewText, totalReviews }
  },
})
</script>

<style lang="postcss">
</style>