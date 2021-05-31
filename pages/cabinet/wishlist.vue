<template>
  <div>
    <h3 v-if="hasItems" class="mb-4 sm:mb-2">
      {{ $t('wishList') }}
    </h3>
    <div
      v-if="hasItems"
      class="flex-y-center pb-5 border-b border-grey-500 sm:justify-between sm:pb-3"
    >
      <div class="font-medium mr-3">
        {{ $t('totalProducts') }}:
        <span class="font-bold">{{ totalItems }}</span>
      </div>
      <a
        href="javascript:void(0)"
        class="flex-y-center text-grey opacity-50 font-bold hover:opacity-100 transition-all"
        @click.prevent="clearList"
        ><svgClose width="8" class="mr-1.5" /> {{ $t('clearList') }}</a>
    </div>
    <div v-if="hasItems" class="mt-9 sm:mt-4">
      <WishlistProducts />
    </div>
    <WishlistEmpty v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgClose from '@/assets/icons/cross.svg?inline'
export default defineComponent({
  components: { svgClose },
  scrollToTop: true,
  setup() {
    const totalItems = computed(() => 7)
    const clearList = () => {}
    const hasItems = computed(() => true)
    return { totalItems, clearList, hasItems }
  },
})
</script>

<style lang="postcss">
</style>