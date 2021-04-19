<template>
  <div class="flex items-center">
    <img
      src="@/assets/icons/logo.svg"
      width="95"
      class="flex-shrink-0 mr-4"
      alt=""
    />
    <div class="leading-4" v-html="$t('logoText')"></div>
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

<style >
</style>