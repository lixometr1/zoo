<template>
  <ProductLabels
    class="product-card__labels flex flex-col absolute right-3 top-5 space-y-1.5"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'
import { ProductLabels } from '@/types/constants'
export default defineComponent({
  props: {
    // topSale: Boolean,
    // isPopular: Boolean,
  },
  setup(props) {},
})
</script>

<style lang="postcss">
</style>