<template>
  <div class="bg-white border-b border-grey-light">
    <div class="container">
      <div class="flex items-center py-4 relative">
        <HeaderCatalogBtn class="mr-8" @click.native="toggleCatalogModal" />
        <HeaderSearch class="flex-grow" />
        <HeaderFeatureBtns class="border-r border-l border-grey-light mx-7" />
        <HeaderCart />
        <CatalogModal />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, ref } from '@nuxtjs/composition-api'
import useCatalogModal from '~/utils/compositions/useCatalogModal'

export default defineComponent({
  setup() {
    const { isOpen, open, close } = useCatalogModal()

    const toggleCatalogModal = () => {
      if (!isOpen.value) {
        open()
      } else {
        close()
      }
    }
    return { toggleCatalogModal }
  },
})
</script>

<style lang="postcss">
</style>