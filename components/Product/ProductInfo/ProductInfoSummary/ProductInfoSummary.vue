<template>
  <div class="product-summary">
    <div class="flex">
      <div class="flex-1 mr-9">
        <ProductInfoSummaryItem
          :height="220"
          :title="$t('description')"
          @open="$emit('tab', 1)"
        >
          <ProductInfoDescription />
        </ProductInfoSummaryItem>
        <ProductInfoSummaryItem
          :height="270"
          class="mt-10"
          :title="$t('characteristics')"
          @open="$emit('tab', 2)"
        >
          <ProductInfoCharacteristics
            class="product-summary__characteristics"
          />
        </ProductInfoSummaryItem>
      </div>
      <div class="flex-1">
        <ProductInfoSummaryItem
          :height="615"
          :title="$t('reviewsMany')"
          @open="$emit('tab', 3)"
        >
          <ProductInfoReviewsItems />
        </ProductInfoSummaryItem>
      </div>
    </div>
    <ProductInfoSummaryItem
      class="mt-14"
      :height="260"
      :title="$t('deliveryAndPayment')"
      @open="$emit('tab', 4)"
    >
      <ProductInfoDelivery />
    </ProductInfoSummaryItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.product-summary {
  &__characteristics {
    @apply flex-col;
    > div {
      @apply mr-0 mb-7;
    }
  }
}
</style>