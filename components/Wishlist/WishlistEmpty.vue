<template>
  <div class="sm:text-center">
    <img
      width="150"
      src="@/assets/icons/wishlist_empty.svg"
      alt="no_orders"
      class="mb-4 sm:mx-auto sm:w-32"
    />
    <h3 class="mb-2 sm:text-lg md:mb-1 sm:leading-5">{{ $t('noWishlist.title') }}</h3>
    <div class="font-medium">{{ $t('noWishlist.description') }}</div>
    <div class="mt-5">
      <NuxtLink :to="localePath('/')" class="btn-green max-w-[220px] sm:text-sm sm:!py-4 sm:max-w-full xs:w-full">{{
        $t('goToMain')
      }}</NuxtLink>
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