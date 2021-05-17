<template>
  <div class="bg-white border-b border-grey-light py-3.5">
    <div class="container">
      <div class="flex-y-center mb-3">
        <router-link :to="localePath('/')"> <Logo /></router-link>
        <HeaderCart class="ml-auto"/>
        <HeaderBurger class="ml-4"/>
      </div>
      <div>
        <HeaderSearch />
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