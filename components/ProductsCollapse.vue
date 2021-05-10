<template>
  <div class="products-collapse" :class="{ open: isOpen, 'has-more': hasMore }">
    <div class="products-collapse__wrapper" :class="{ 'blur-down': hasMore }">
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div v-for="(item, idx) in items" :key="idx" class="">
          <ProductCard
            :multilineTitle="true"
            :showReviews="false"
            :item="item"
            class="products-slider__product"
          />
        </div>
      </div>
    </div>
    <ArrowMore class="-top-3.5" v-if="hasMore" :open="isOpen" @click="toggle" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from '@nuxtjs/composition-api'
import useOpen from '@/utils/compositions/useOpen'
export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { items } = toRefs(props)
    const { toggle, isOpen, open, close } = useOpen()
    const hasMore = computed(() => {
      return items.value.length > 4
    })

    return { isOpen, toggle, hasMore }
  },
})
</script>

<style lang="postcss">
.products-collapse {
  &__wrapper {
    @apply relative;
  }
  &.has-more &__wrapper {
    @apply max-h-[600px] overflow-hidden;
  }
  &.open &__wrapper {
    max-height: none;
    &::before {
      @apply hidden;
    }
  }
}
</style>