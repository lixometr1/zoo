<template>
  <div>
    <div class="pb-3 border-b border-opacity-20 border-grey mb-5.5 inline-block">
      <router-link :to="localePath('/')"> <Logo /></router-link>
    </div>
    <div>
      <div class="font-medium mb-3 text-opacity-80">По всем вопросам:</div>
      <div class="flex items-center mb-1">
        <div class="w-5 mr-2">
          <img
            class="mx-auto"
            src="@/assets/icons/smartphone.svg"
            alt="image"
          />
        </div>
        <a href="tel:+38 066 364 19 19" class="border-circle-grey"
          >+38 066 364 19 19</a
        >
      </div>
      <div class="flex items-center">
        <div class="w-5 mr-2">
          <img class="mr-2" src="@/assets/icons/email.svg" alt="image" />
        </div>
        <a href="mailto:support@zoo.com.ua" class="border-circle-grey"
          >support@zoo.com.ua</a
        >
      </div>
    </div>
    <div class="mt-5.5">
      <FooterSocIcons />
    </div>
  </div>
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
</style>