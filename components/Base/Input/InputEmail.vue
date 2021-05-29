<template>
  <AInput :label="$t('email')" type="email" v-bind="$attrs" v-on="$listeners">
    <template #prefix>
      <svgEmail width="18" class="text-grey text-opacity-50" />
    </template>
  </AInput>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgEmail from '@/assets/icons/email.svg?inline'

export default defineComponent({
  components: { svgEmail },
  inheritAttrs: false,
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>