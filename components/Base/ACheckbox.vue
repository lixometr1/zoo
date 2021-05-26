<template>
  <div class="app-checkbox" :class="{ active: value }" v-on="$listeners">
    <svgCheckmark width="10" class="app-checkbox__mark" />
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'

export default defineComponent({
  components: { svgCheckmark },
  props: {
    value: Boolean,
  },
  setup(props, { emit }) {
    const { value } = toRefs(props)
    return {}
  },
})
</script>

<style lang="postcss">
.app-checkbox {
  @apply flex-center rounded border-2 border-grey border-opacity-50 w-4.5 h-4.5 cursor-pointer;

  &:hover {
    .app-checkbox__mark {
      @apply text-grey opacity-50;
    }
  }
  &.active {
    @apply bg-green border-green;
    .app-checkbox__mark {
      @apply text-white opacity-100;
    }
  }
  &__mark {
    opacity: 0;
  }
}
</style>