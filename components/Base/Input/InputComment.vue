<template>
  <ATextArea
    :label="$t('orderComment')"
    :inputAttrs="{ class: 'sm:leading-4' }"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #prefix>
      <svgComment
        width="18"
        class="text-grey text-opacity-50 relative top-1.5"
      />
    </template>
  </ATextArea>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgComment from '@/assets/icons/comment.svg?inline'

export default defineComponent({
  components: { svgComment },
  inheritAttrs: false,
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>