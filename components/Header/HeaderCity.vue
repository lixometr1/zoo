<template>
  <div class="flex items-center">
    <img class="mr-2" src="@/assets/icons/marker.svg" alt="" />
    <div class="mr-2">{{ $t('yourCity') }}:</div>
    <HeaderCitySelect />
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