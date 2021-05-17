<template>
  <div class="text-content" v-html="text">
    <!-- <slot /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    text: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.text-content {
  h3 {
    @apply mb-2;
  }
}
</style>