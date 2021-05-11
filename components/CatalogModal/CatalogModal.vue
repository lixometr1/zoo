<template>
  <div
    v-if="isOpen"
    v-click-outside="{ handler: closeMenu, middleware: clickMiddleware }"
    class="catalog-modal md:hidden"
  >
    <CatalogModalController />
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from '@nuxtjs/composition-api'
import useCatalogModal from '~/utils/compositions/useCatalogModal'

export default defineComponent({
  setup() {
    const { isOpen, close } = useCatalogModal()
    const clickMiddleware = (e: MouseEvent) => {
      return !(e.target as HTMLElement)?.className?.includes(
        'header-catalog-btn'
      )
    }
    const closeMenu = () => {
      setTimeout(() => {
        close()
      }, 0)
    }
    return { isOpen, closeMenu, clickMiddleware }
  },
})
</script>

<style lang="postcss">
.catalog-modal {
  @apply absolute -bottom-5.5 transform translate-y-full
            w-auto z-50
            h-[500px];
  box-shadow: 10px 10px 40px rgba(62, 63, 67, 0.1);
}
</style>