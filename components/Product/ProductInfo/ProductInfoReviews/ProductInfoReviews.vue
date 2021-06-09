<template>
  <div>
    <ProductInfoReviewsSummary />
    <ProductInfoReviewsItems class="mt-9" />
    <div class="flex-y-center flex-col mt-5">
      <LoadMoreText
        class="my-7 sm:my-4"
        :cnt="reviewsToLoad"
        :itemsSclon="reviewsSclon"
        @click="loadMoreReviews"
      />
      <button
        class="btn-green btn-green--shadow !px-9 py-4.5 sm:text-sm"
        aria-expanded="false"
        type="button"
        @click="leftReview"
      >
        {{ $t('leftReview') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import { ModalName } from '~/types/modal.enum'
import useModal from '~/utils/compositions/useModal'

import useWordSclon from '~/utils/compositions/useWordSclon'
export default defineComponent({
  setup() {
    const leftReview = () => {
      const { showByName } = useModal()
      showByName(ModalName.sendReview)
    }
    const loadMoreReviews = () => {}
    const reviewsToLoad = ref(23)
    const reviewsSclon = useContext().i18n.t('reviews') as any as string[]
    const itemsText = computed(() => {
      const { exec } = useWordSclon(reviewsSclon)
      return exec(reviewsToLoad.value)
    })
    return {
      leftReview,
      itemsText,
      reviewsToLoad,
      reviewsSclon,
      loadMoreReviews,
    }
  },
})
</script>

<style lang="postcss">
</style>