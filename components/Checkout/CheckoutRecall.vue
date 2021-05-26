<template>
  <div>
    <ACheckboxInput
      :label="$t('recallToApprove')"
      v-bind="$attrs"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  inheritAttrs: false,
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>