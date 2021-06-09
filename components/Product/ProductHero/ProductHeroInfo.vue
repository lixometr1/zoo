<template>
  <div>
    <div class="flex">
      <ProductSku class="mr-3.5" :value="sku" /><ProductAvailable
        :status="availableStatus"
      />
    </div>
    <div class="flex items-start mt-4 sm:mt-0">
      <ProductTitle :value="title" class="mr-3 md:mr-0" />
      <ProductFeaturesBtn class="ml-auto md:hidden" />
    </div>
    <div class="max-w-[220px] sm:max-w-[170px]">
      <ProductCntChooser v-model="activeCnt" class="mt-4" />
    </div>
    <ProductVariations v-model="activeVariations" class="mt-7" />
    <!-- id for floating cart btn -->
    <ProductPriceBlock
      id="product-price-block"
      class="mt-7"
      :price="'3 276'"
      :oldPrice="'3 787'"
      :sale="12"
    />
    <ProductReviewBlock
      class="mt-7 sm:mt-10"
      :total="totalReviews"
      :stars="stars"
    />
    <ProductDelivery class="mt-10 sm:mt-5.5" />
  </div>
</template>

<script lang="ts">
import {
  computed,
  ComputedRef,
  defineComponent,
  inject,
  ref,
  toRefs,
} from '@nuxtjs/composition-api'
import { ProductEntity } from '~/utils/models/product.entity'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const { item } = toRefs(props)
    const product = inject<ComputedRef<ProductEntity>>('product')
    const sku = '123455'
    const availableStatus = computed(() => 1)
    const activeCnt = ref(1)
    const title = computed(() => 'Royal Canin Maxi Adult ')
    const activeVariations = ref({})
    const totalReviews = computed(() => 332)
    const stars = computed(() => 4)
    return {
      sku,
      availableStatus,
      activeCnt,
      title,
      activeVariations,
      totalReviews,
      stars,
    }
  },
})
</script>

<style lang="postcss">
</style>