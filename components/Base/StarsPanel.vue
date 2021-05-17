<template>
  <div class="flex-y-center space-x-1.5">
    <StarHandler
      v-for="item in 5"
      :key="item"
      class="w-[18px] text-yellow"
      :active="item <= stars"
      v-bind="{ strokeClass: 'text-grey text-opacity-50', ...$attrs }"
    />
    <div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    stars: Number,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>