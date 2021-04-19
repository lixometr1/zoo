<template>
  <div class="container py-4 bg-white border-b border-grey-light">
    <div class="flex items-center">
      <router-link :to="localePath('/')"> <Logo /></router-link>
      <HeaderMenu class="flex-auto px-6" />
      <HeaderLocaleSwitcher class="mr-6" />
      <HeaderPhones class="mr-7" />
      <HeaderAccount />
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