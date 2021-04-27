<template>
  <footer class="pt-7 bg-white footer mt-18 md:mt-14 sm:mt-9">
    <div class="container">
      <div class="flex pb-14 lg:flex-wrap">
        <FooterInfoCol class="footer-info-col w-1/4 lg:w-full lg:mb-12 sm:mb-10" />
        <FooterMenu class="w-3/4 lg:w-full" />
      </div>
      <div
        class="py-9 border-t border-grey border-opacity-20 flex items-center justify-between sm:flex-col "
      >
        <div class="font-medium sm:order-2 sm:text-center sm:max-w-[172px]">{{ $t('footer.copyright') }}</div>
        <div class="flex sm:mb-3 sm:max-w-[100px]">
          <img src="@/assets/icons/visa.svg" alt="visa" class="mr-3 min-w-0" />
          <img src="@/assets/icons/mastercard.svg" alt="mastercard" class="min-w-0"/>
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