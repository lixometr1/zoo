<template>
  <div>
    <ProductInfoTabsHeader v-model="activeTab" />
    <div class="pt-9">
      <transition name="t-fade" mode="out-in">
        <ProductInfoDescription v-if="activeTab === 1" />
        <ProductInfoCharacteristics v-if="activeTab === 2" />
        <ProductInfoReviews v-if="activeTab === 3" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const activeTab = ref(3)
    return { activeTab }
  },
})
</script>

<style lang="postcss">
</style>