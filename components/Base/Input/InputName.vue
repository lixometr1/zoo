<template>
  <AInput
    :label="$t('personName')"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #prefix>
      <svgUser width="18" class="text-grey text-opacity-50" />
    </template>
  </AInput>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgUser from '@/assets/icons/user.svg?inline'

export default defineComponent({
  components: { svgUser },
  inheritAttrs: false,
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>