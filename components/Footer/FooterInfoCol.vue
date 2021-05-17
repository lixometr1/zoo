<template>
  <div
    class="lg:flex lg:justify-between lg:border-b border-grey border-opacity-20 sm:border-none sm:flex-col sm:items-center"
  >
    <div
      class="inline-block pb-3 border-b border-opacity-20 border-grey mb-5.5 lg:border-none sm:border-solid sm:pb-4 sm:w-full"
    >
      <router-link class="block" :to="localePath('/')">
        <Logo class="footer-logo" />
      </router-link>
      <div class="hidden lg:block mt-5 sm:hidden">
        <FooterSocIcons />
      </div>
    </div>
    <div class="lg:text-right sm:text-center">
      <div class="font-medium mb-3 text-opacity-80">
        {{ $t('footer.questions') }}:
      </div>
      <div class="flex items-center mb-1 lg:justify-end sm:justify-center">
        <div class="w-5 mr-2">
          <svgPhone width="12" class="text-grey mx-auto" />
        </div>
        <a href="tel:+38 066 364 19 19" class="border-circle-grey">
          +38 066 364 19 19
        </a>
      </div>
      <div class="flex items-center lg:justify-end">
        <div class="w-5 mr-2">
          <img class="mr-2" src="@/assets/icons/email.svg" alt="image" />
        </div>
        <a href="mailto:support@zoo.com.ua" class="border-circle-grey">
          support@zoo.com.ua
        </a>
      </div>
    </div>
    <div class="mt-5.5 lg:hidden">
      <FooterSocIcons />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgPhone from '@/assets/icons/smartphone.svg?inline'
export default defineComponent({
  components: { svgPhone },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.footer-logo {
  @apply sm:flex-col sm:items-center sm:text-center max-w-none w-full;
  img {
    @apply sm:mr-0 mb-3;
  }
}
</style>