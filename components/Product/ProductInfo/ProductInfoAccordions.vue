<template>
  <div class="space-y-3">
    <ProductInfoAccordion
      :title="$t('description')"
      :value="openIdx === 0"
      @input="openCollapse(0, $event)"
    >
      <ProductInfoDescription />
    </ProductInfoAccordion>
    <ProductInfoAccordion
      :title="$t('characteristics')"
      :value="openIdx === 1"
      @input="openCollapse(1, $event)"
    >
      <ProductInfoCharacteristics />
    </ProductInfoAccordion>
    <ProductInfoAccordion
      :title="$t('reviewsMany')"
      :value="openIdx === 2"
      @input="openCollapse(2, $event)"
    >
      <ProductInfoReviews />
    </ProductInfoAccordion>
    <ProductInfoAccordion
      :title="$t('deliveryAndPayment')"
      :value="openIdx === 3"
      @input="openCollapse(3, $event)"
    >
      <ProductInfoDelivery />
    </ProductInfoAccordion>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const openIdx = ref<number>(-1)
    const openCollapse = (idx: number, makeOpen: boolean) => {
      if (!makeOpen) {
        openIdx.value = -1
        return
      }
      openIdx.value = idx
    }
    return {
      openIdx,
      openCollapse,
    }
  },
})
</script>

<style lang="postcss">
</style>