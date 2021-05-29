<template>
  <AInput
    :label="$t('phone')"
    type="tel"
    mask="+38 ### ### ## ##"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #prefix>
      <svgPhone width="11" class="text-grey text-opacity-50" />
    </template>
  </AInput>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgPhone from '@/assets/icons/smartphone.svg?inline'

export default defineComponent({
  components: { svgPhone },
  inheritAttrs: false,
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>