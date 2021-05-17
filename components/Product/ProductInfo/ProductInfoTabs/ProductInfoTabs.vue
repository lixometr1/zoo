<template>
  <div id="product-info-tabs">
    <ProductInfoTabsHeader v-model="activeTab" />
    <div class="pt-9">
      <transition name="t-fade" mode="out-in">
        <ProductInfoSummary v-if="activeTab === 0" @tab="goToTab" />
        <ProductInfoDescription v-if="activeTab === 1" />
        <ProductInfoCharacteristics v-if="activeTab === 2" />
        <ProductInfoReviews v-if="activeTab === 3" />
        <ProductInfoDelivery v-if="activeTab === 4" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const activeTab = ref(0)
    const goToTab = (tab: number) => {
      document
        .querySelector('#product-info-tabs')
        ?.scrollIntoView({ behavior: 'smooth' })
      activeTab.value = tab
    }
    return { activeTab, goToTab }
  },
})
</script>

<style lang="postcss">
</style>