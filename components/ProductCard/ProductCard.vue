<template>
  <div class="product-card relative" :class="{ 'size-sm': size === 'sm' }">
    <router-link
      :to="productLink"
      class="block product-card__image"
      :class="{ full: isFullImage }"
    >
      <img src="@/assets/img/product_mock.png" alt="" />
    </router-link>
    <div class="product-card__content">
      <ProductCardActions />
      <ProductCardLabels v-if="showLabels" />
      <ProductCardReviews
        class="mt-4"
        :stars="4"
        :hasReviews="true"
        :total="43"
      />
      <ProductCardAvailable class="mt-4" :has="true" />
      <router-link :to="productLink" class="block truncate font-bold"
        >Royal Canin Maxi Adult - 12 sad sd</router-link
      >
      <ProductCardPrice
        :size="size"
        class="mt-4"
        :price="3200"
        :oldPrice="3.78"
        :sale="13"
      />
      <button v-if="showBtn" class="btn-green mt-4.5 w-full" @click="addToCart">
        {{ $t('toCart') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { ProductEntity } from '~/utils/models/Product'

export default defineComponent({
  props: {
    size: {
      type: String,
    },
    showLabels: {
      type: Boolean,
      default: true,
    },
    showBtn: {
      type: Boolean,
      default: true,
    },
    item: {
      type: ProductEntity,
      default: () => new ProductEntity(),
    },
  },
  setup() {
    const addToCart = () => {}
    const productLink = '#'
    const isFullImage = computed(() => false)
    return { addToCart, productLink, isFullImage }
  },
})
</script>

<style lang="postcss">
.product-card {
  @apply box-border bg-white rounded-xl border border-grey-light pb-6 overflow-hidden;
  &.size-sm {
    @apply text-sm;
  }
  &.size-sm &__content {
    @apply px-5.5;
  }
  &__content {
    @apply px-6;
  }
  &__image {
    @apply h-[180px] flex items-center justify-center pt-6;

    img {
      @apply w-full h-full object-contain;
    }
    &.full {
      @apply pt-0;
      img {
        @apply object-cover;
      }
    }
  }
  .star {
    fill: theme('colors.yellow');
  }
}
</style>