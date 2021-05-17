<template>
  <div class="title-with-all">
    <slot name="title">
      <h2>{{ title }}</h2>
    </slot>
    <router-link
      v-if="showAll"
      class="title-with-all__link border-circle-grey "
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
.title-with-all {
  @apply flex items-center;
  &__link {
    @apply ml-7 sm:ml-3 xs:text-xs text-sm hover:text-green hover:border-green transition-colors;
  }
}
</style>