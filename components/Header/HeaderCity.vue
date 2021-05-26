<template>
  <div class="flex items-center">
    <svgMarker class="mr-2 text-grey" width="12" />
    <div class="mr-2">{{ $t('yourCity') }}:</div>
    <HeaderCitySelect />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgMarker from '@/assets/icons/marker.svg?inline'
export default defineComponent({
  components: { svgMarker },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>