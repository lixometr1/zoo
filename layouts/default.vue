<template>
  <div class="page-layout">
    <!-- <div v-if="isLoading" class="app-loading"></div> -->
    <Header />
    <MenuMob />
    <Nuxt class="page-wrapper" />
    <Footer />
    <Modal />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
import imagesLoaded from 'imagesloaded'
export default defineComponent({
  setup() {
    const isLoading = ref(true)
    onMounted(() => {
      imagesLoaded(document.body, () => {
        setTimeout(() => {
          isLoading.value = false
        }, 100)
      })
    })
    return {
      isLoading,
    }
  },
})
</script>

<style lang="postcss">
.app-loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: red;
  z-index: 30;
}
</style>
