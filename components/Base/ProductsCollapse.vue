<template>
  <ArrowCollapse height="600px" class="products-collapse" :hasMore="hasMore">
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
  </ArrowCollapse>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from '@nuxtjs/composition-api'
import useOpen from '@/utils/compositions/useOpen'
// import { CollapseTransition } from '@ivanv/vue-collapse-transition'

export default defineComponent({
  // components: { CollapseTransition },
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
}
</style>