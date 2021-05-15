<template>
  <IconHandler v-bind="$attrs" v-on="$listeners">
    <template #stroke="{ attrs }">
      <svgThumbDown v-bind="attrs" />
    </template>
    <template #fill="{ attrs }">
      <svgThumbDownFill v-bind="attrs" />
    </template>
  </IconHandler>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgThumbDown from '@/assets/icons/thumb_down.svg?inline'
import svgThumbDownFill from '@/assets/icons/thumb_down_filled.svg?inline'
export default defineComponent({
  components: { svgThumbDown, svgThumbDownFill },
  inheritAttrs: false,

  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>