<template>
  <div class="border-b border-grey-light">
    <div class="container">
      <div class="flex w-100 items-center text-sm py-2">
        <HeaderCity class="mr-9" />
        <HeaderDelivery />
        <a
          href="#"
          class="text-green uppercase text-base ml-auto border-circle-green hover:border-solid"
          @click.prevent="openConsult"
        >
          {{ $t('needConsult') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const openConsult = () => {}
    return { openConsult }
  },
})
</script>

<style lang="postcss">
</style>