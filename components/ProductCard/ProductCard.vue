<template>
  <div
    class="product-card relative"
    :class="{ 'size-sm': size === 'sm', 'name-multiline': multilineTitle }"
  >
    <router-link
      :to="productLink"
      class="block product-card__image"
      :class="{ full: isFullImage }"
    >
      <img :src="image" alt="" />
    </router-link>
    <div class="product-card__content">
      <ProductCardActions />
      <ProductCardLabels
        v-if="showLabels"
        :topSale="topSale"
        :isPopular="isPopular"
      />
      <ProductCardReviews
        class="mt-4"
        :stars="4"
        :hasReviews="true"
        :total="43"
      />
      <ProductCardAvailable class="mt-4" :has="true" />
      <router-link :to="productLink" class="block font-bold product-card__name">
        {{ name }}</router-link
      >
      <ProductCardPrice
        :size="size"
        class="mt-4"
        :price="price"
        :oldPrice="oldPrice"
        :sale="sale"
      />
      <button v-if="showBtn" class="btn-green mt-4.5 w-full" @click="addToCart">
        {{ $t('toCart') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import useResizeValue from '~/utils/compositions/useResizeValue'
import useTextShort from '~/utils/compositions/useTextShort'
import { ProductEntity } from '~/utils/models/product.entity'

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
    },
    multilineTitle: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { multilineTitle, item } = toRefs(props)
    const addToCart = () => {}
    const productLink = '#'
    const isFullImage = computed(() => true)
    const topSale = computed(() => {
      return !!item?.value?.defaultItem?.top_sale_label
    })
    const isPopular = computed(() => {
      return !!item?.value?.defaultItem?.popular_label
    })
    const name = computed(() => {
      return item?.value?.name || 'Royal Canin Maxi Adult - 1'
    })
    const hasSale = computed(() => {
      return (
        !!item?.value?.salePrice && item.value.salePrice !== item.value.price
      )
    })
    const price = computed(() => {
      if (hasSale.value) {
        return item?.value?.salePrice
      } else {
        return item?.value?.price || 100
      }
    })
    const oldPrice = computed(() => {
      if (hasSale.value) {
        return item?.value?.price
      }
      return 0
    })
    const sale = computed(() => {
      if (!hasSale.value) return 0
      if (oldPrice.value && price.value) {
        return 100 - Math.round((price?.value / oldPrice?.value) * 100)
      }
      return 0
    })

    const image = computed(() => {
      return item?.value?.defaultItem?.defaultImage?.url
    })
    return {
      image,
      isPopular,
      name,
      sale,
      price,
      hasSale,
      oldPrice,
      topSale,
      addToCart,
      productLink,
      isFullImage,
    }
  },
})
</script>

<style lang="postcss">
.product-card {
  @apply box-border bg-white rounded-xl border border-grey-light pb-6 overflow-hidden;
  &.size-sm {
    @apply text-sm sm:text-xs;
  }
  &.size-sm &__content {
    @apply px-5.5;
  }
  &__content {
    @apply px-6 sm:px-3.5;
  }
  &.name-multiline &__name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: initial;
    @apply overflow-hidden h-[40px] sm:h-[30px];
  }
  &__name {
    text-overflow: ellipsis;
    white-space: nowrap;
    @apply overflow-hidden h-[20px] sm:h-[30px];
    @media screen and (max-width: theme('screens.sm.max')) {
      -webkit-line-clamp: 2;
      display: -webkit-box;
      white-space: initial;
      -webkit-box-orient: vertical;
    }
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