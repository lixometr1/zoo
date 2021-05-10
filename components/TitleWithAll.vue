<template>
  <div class="mb-9 md:mb-5 flex items-center xs:justify-between">
    <slot name="title">
      <h2>{{ title }}</h2>
    </slot>
    <router-link
      v-if="showAll"
      class="ml-7 xs:ml-0 xs:text-xs border-circle-grey text-sm"
      :to="link || '#'"
      >{{ $t('watchAll') }}</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    title: String,
    link: [String, Object],
    showAll: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>