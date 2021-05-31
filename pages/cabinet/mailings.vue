<template>
  <div>
    <h3 class="mb-12 sm:mb-8">{{ $t('mailings') }}</h3>
    <h4 class="mb-8 sm:mb-3.5">
      {{ $t('mailingsTypes') }}
    </h4>
    <CabinetMailingsAgreements />
    <CabinetMailingsChannels class="mt-10 sm:mt-6"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
    scrollToTop: true,

  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>