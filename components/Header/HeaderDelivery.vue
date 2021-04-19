<template>
  <div class="flex items-center">
    <img src="@/assets/icons/track.svg" class="text-grey mr-2" alt="" />
    <div class="mr-2">{{$t('freeDelivery')}}:</div>
    <div class="px-2.5 py-0.5 text-green rounded-md border border-green bg-green bg-opacity-10 font-medium">{{$t('today')}}</div>
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