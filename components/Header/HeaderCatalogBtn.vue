<template>
  <div class="btn-green w-[300px] lg:w-[250px] btn-green--shadow">
    <svgBurger width="20" class="mr-4" />
    <div class="font-bold">{{ $t('catalog') }}</div>
    <svgArrowDown
      width="12"
      class="ml-auto transform transition-transform"
      :class="{ 'rotate-180': isOpen }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down.svg?inline'
import svgBurger from '@/assets/icons/burger.svg?inline'
import useCatalogModal from '~/utils/compositions/useCatalogModal'
export default defineComponent({
  components: { svgArrowDown, svgBurger },
  setup() {
    const { isOpen } = useCatalogModal()
    return {
      isOpen,
    }
  },
})
</script>

<style lang="postcss">
.header-catalog-btn {
  box-shadow: 0 5px 20px rgba(32, 194, 89, 0.5);
}
</style>