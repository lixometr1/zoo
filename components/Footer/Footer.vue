<template>
  <footer class="pt-16 bg-white footer mt-18 md:mt-14">
    <div class="container">
      <div class="flex pb-14">
        <FooterInfoCol class="footer-info-col w-1/4" />
        <FooterMenu class="w-3/4" />
      </div>
      <div
        class="py-9 border-t border-grey border-opacity-20 flex items-center justify-between"
      >
        <div class="font-medium">Copyright © Zoo.com.ua, 2021 | Все права защищены</div>
        <div class="flex">
          <img src="@/assets/icons/visa.svg" alt="visa" class="mr-3" />
          <img src="@/assets/icons/mastercard.svg" alt="mastercard" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.footer {
  &-info-col {
    /* @apply w-[290px]; */
  }
}
</style>