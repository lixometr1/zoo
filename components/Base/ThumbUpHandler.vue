<template>
  <IconHandler v-bind="$attrs" v-on="$listeners">
    <template #stroke="{ attrs }">
      <svgThumbUp v-bind="attrs" />
    </template>
    <template #fill="{ attrs }">
      <svgThumbUpFill v-bind="attrs" />
    </template>
  </IconHandler>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgThumbUp from '@/assets/icons/thumb_up.svg?inline'
import svgThumbUpFill from '@/assets/icons/thumb_up_filled.svg?inline'
export default defineComponent({
  components: { svgThumbUp, svgThumbUpFill },
  inheritAttrs: false,

  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>