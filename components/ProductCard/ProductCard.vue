<template>
  <div class="product-card relative">
    <router-link :to="productLink" class="block product-card__image">
      <img src="@/assets/img/product_mock.png" alt="" />
    </router-link>
    <ProductCardActions />
    <ProductCardLabels />
    <ProductCardReviews
      class="mt-4"
      :stars="4"
      :hasReviews="true"
      :total="43"
    />
    <ProductCardAvailable class="mt-5" :has="true" />
    <router-link :to="productLink" class="block truncate font-bold"
      >Royal Canin Maxi Adult - 12 sad sd</router-link
    > 
    <ProductCardPrice class="mt-4" :price="3200" :oldPrice="3.78" :sale="13" />
    <button class="btn-green mt-4.5 w-full" @click="addToCart">
      {{ $t('toCart') }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { ProductEntity } from '~/utils/models/Product'

export default defineComponent({
  props: {
    item: {
      type: ProductEntity,
      default: () => new ProductEntity(),
    },
  },
  setup() {
    const addToCart = () => {}
    const productLink = '#'
    return { addToCart, productLink }
  },
})
</script>

<style lang="postcss">
.product-card {
  @apply box-border w-[274px] bg-white rounded-xl border border-grey-light px-6 py-6;
  &__image {
    @apply h-[180px] flex items-center justify-center;
    img {
      @apply w-full h-full object-contain;
    }
  }
  .star {
    fill: theme('colors.yellow');
  }
}
</style>