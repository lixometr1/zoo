<template>
  <div
    ref="selfEl"
    class="product-card"
    :class="{
      'size-sm': size === 'sm',
      'is-available': isAvailable,
      'name-multiline': multilineTitle,
      'hover-collapse': hoverCollapse,
      'is-hover': hoverClass,
    }"
    @mouseenter.self="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <router-link
      :to="productLink"
      class="block product-card__image"
      :class="{ full: isFullImage }"
    >
      <img :src="image" alt="" />
      <transition name="t-fade">
        <button v-if="isHover" class="product-card__quick-view" @click.prevent>
          {{ $t('quickView') }}
        </button>
      </transition>
    </router-link>
    <div class="product-card__content">
      <ProductCardActions />
      <ProductCardLabels
        v-if="showLabels"
        :topSale="topSale"
        :isPopular="isPopular"
      />
      <ProductCardReviews
        v-if="showReviews"
        class="mt-4"
        :stars="4"
        :hasReviews="true"
        :total="43"
      />
      <ProductCardAvailable class="mt-4" :has="isAvailable" />
      <router-link
        :to="productLink"
        class="block font-bold text-grey product-card__name"
        :class="{ 'text-opacity-50': !isAvailable }"
      >
        {{ name }}</router-link
      >
      <CollapseTransition
        @before-enter="beforeHoverEnter"
        @after-enter="afterHoverEnter"
        @before-leave="beforeHoverLeave"
        @after-leave="afterHoverLeave"
      >
        <ProductCardVariations
          v-if="isHover"
          v-model="activeVariations"
          class="pt-4"
          :items="variations"
        />
      </CollapseTransition>
      <ProductCardPrice
        :size="size"
        class="mt-4 sm:mt-2"
        :price="price"
        :oldPrice="oldPrice"
        :sale="sale"
      />
      <button
        v-if="showBtn"
        class="btn-green mt-4.5 w-full sm:mt-2"
        @click="addToCart"
      >
        {{ $t('toCart') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
} from '@nuxtjs/composition-api'
import { CollapseTransition } from '@ivanv/vue-collapse-transition'
import useProductCardFields from './product-card-fields'

import useResizeValue from '~/utils/compositions/useResizeValue'
import useTextShort from '~/utils/compositions/useTextShort'
import { ProductEntity } from '~/utils/models/product.entity'
export default defineComponent({
  components: { CollapseTransition },
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
    showReviews: {
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
    hoverCollapse: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const { multilineTitle, item, hoverCollapse } = toRefs(props)
    const addToCart = () => {}
    const productLink = '#'
    const selfEl = ref<HTMLElement>((null as any) as HTMLElement)
    const {
      isFullImage,
      topSale,
      isPopular,
      name,
      hasSale,
      price,
      oldPrice,
      sale,
      isAvailable,
      image,
      variations,
      activeVariations,
    } = useProductCardFields(item)
    const isHover = ref(false)
    const hoverClass = ref(false)
    const itemClone = ref(null as any)
    const animatingState = ref('leave')
    let elDimensions = reactive({
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      borderRadius: '',
    })
    const onMouseEnter = () => {
      if (hoverCollapse.value && isAvailable.value) {
        isHover.value = true
        const el = selfEl.value
        const rect = el.getBoundingClientRect()
        const left = rect.left
        const top = rect.top + window.scrollY
        const width = el.offsetWidth
        const height = el.offsetHeight
        const borderRadius = getComputedStyle(el).borderRadius
        elDimensions = reactive({
          left,
          top,
          width,
          height,
          borderRadius,
        })
        if (
          el.parentNode !== document.body &&
          animatingState.value === 'leave'
        ) {
          hoverClass.value = true

          itemClone.value = document.createElement('div')
          const clone = itemClone.value
          clone.style.width = `${elDimensions.width}px`
          clone.style.height = `${elDimensions.height}px`
          clone.style.borderRadius = `${elDimensions.borderRadius}px`

          el.style.left = `${elDimensions.left}px`
          el.style.top = `${elDimensions.top}px`
          el.style.width = `${elDimensions.width}px`
          el.after(clone)
          document.body.appendChild(el)
        }
      }
    }

    const onMouseLeave = () => {
      isHover.value = false
    }
    const afterHoverLeave = () => {
      if (animatingState.value === 'enter') return
      const el = selfEl.value

      if (el.parentNode === document.body) {
        el.style.left = ''
        el.style.top = ''
        el.style.width = ''
        hoverClass.value = false

        itemClone.value.after(el)
        itemClone.value.remove()
        itemClone.value = null
      }
      animatingState.value = 'leave'
    }
    const beforeHoverEnter = () => {
      animatingState.value = 'enter'
    }
    const afterHoverEnter = () => {
      animatingState.value = 'enter'
    }
    const beforeHoverLeave = () => {
      animatingState.value = 'leave'
    }
    return {
      afterHoverEnter,
      beforeHoverLeave,
      selfEl,
      beforeHoverEnter,
      afterHoverLeave,
      hoverClass,
      isHover,
      onMouseEnter,
      onMouseLeave,
      activeVariations,
      variations,
      isAvailable,
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
  @apply box-border bg-white rounded-xl border border-grey-light pb-6 overflow-hidden relative transition min-w-0;
  &.size-sm {
    @apply text-sm sm:text-xs;
  }
  &.size-sm &__content {
    @apply px-5.5;
  }
  &.hover-collapse {
    &:hover {
    }
  }
  &.is-hover {
    position: absolute;
    box-shadow: 0px 0px 30px rgba(82, 98, 114, 0.15);
    z-index: 100;
    padding-top: 40px;
    transform: translateY(-60px);
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
    @apply overflow-hidden h-[20px] sm:h-[30px] max-w-full;
    @media screen and (max-width: theme('screens.sm.max')) {
      -webkit-line-clamp: 2;
      display: -webkit-box;
      white-space: initial;
      -webkit-box-orient: vertical;
    }
  }
  &__quick-view {
    @apply bg-white bg-opacity-90 py-3 px-4.5 font-medium  z-20 rounded-md focus:outline-none
            hover:bg-opacity-100
            absolute bottom-0 left-1/2 transform -translate-x-1/2;
    box-shadow: 0px 0px 15px rgba(82, 98, 114, 0.25);
  }
  &__image {
    @apply h-[180px] flex items-center justify-center pt-6 relative md:px-5;

    img {
      @apply w-full h-full object-contain;
    }
    &.full {
      @apply pt-0 px-0;
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