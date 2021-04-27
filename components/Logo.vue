<template>
  <div class="flex items-center">
    <img
      src="@/assets/icons/logo.svg"
      width="95"
      class="flex-shrink-0 mr-4 w-[95px] md:w-[54px]"
      alt=""
    />
    <div class="leading-4 md:leading-none text-grey text-opacity-80" v-html="$t('logoText')"></div>
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