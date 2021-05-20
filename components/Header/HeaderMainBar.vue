<template>
  <div class="py-4 bg-white border-b border-grey-light">
    <div class="container">
      <div class="flex items-center">
        <NuxtLink :to="localePath('/')"> <Logo /></NuxtLink>
        <HeaderMenu class="flex-auto px-6 lg:hidden" />
        <HeaderLocaleSwitcher class="mr-6 lg:ml-auto" />
        <HeaderPhones class="mr-7" />
        <HeaderAccount />
        <HeaderBurger class="hidden lg:block ml-10" />
      </div>
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