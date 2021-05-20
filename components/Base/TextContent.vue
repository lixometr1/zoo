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
  ul {
    li {
      &::before {
        @apply mr-2;
        content: '';
        background: url(~@/assets/icons/checkmark_green.svg) center center no-repeat;
        background-size: contain;
        width: 10px;
        height: 10px;
        position: relative;
        top: 7px;
      }
    }
  }
}
</style>