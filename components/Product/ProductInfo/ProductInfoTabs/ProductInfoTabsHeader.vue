<template>
  <div class="product-info-tabs-header">
    <a
      v-for="(tab, idx) in tabs"
      :key="idx"
      class="product-info-tab"
      href="javascript:void(0)"
      :class="{ active: idx === value }"
      @click.prevent="chooseTab(idx)"
    >
      {{ tab.name }}
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: Number,
  },
  setup(props, { emit }) {
    const t = useContext().i18n.t.bind(useContext().i18n)
    const reviewsCnt = computed(() => 16)
    const tabs = [
      {
        name: t('aboutProduct'),
      },
      {
        name: t('description'),
      },
      {
        name: t('characteristics'),
      },
      {
        name: `${t('reviewsMany')} (${reviewsCnt.value})`,
      },
      {
        name: t('deliveryAndPayment'),
      },
    ]
    const chooseTab = (idx: number) => {
      emit('input', idx)
    }
    return { tabs, chooseTab }
  },
})
</script>

<style lang="postcss">
.product-info-tabs-header {
  @apply space-x-9 border-b border-grey border-opacity-30 flex;
  .product-info-tab {
    @apply pb-4 block border-b-[5px] border-transparent font-semibold text-grey text-opacity-50 transition-colors border-opacity-40
        relative top-[1px] select-none hover:text-green;
    &.active {
      @apply border-green text-green;
    }
  }
}
</style>