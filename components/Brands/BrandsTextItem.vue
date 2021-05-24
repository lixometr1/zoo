<template>
  <div>
    <div class="uppercase font-bold text-2lg mb-4.5">
      {{ letter }}
    </div>
    <div class="space-y-3">
      <div v-for="(item, i) in items" :key="i">
        <NuxtLink
          to="#"
          class="font-semibold text-sm border-b-2 border-dotted text-grey text-opacity-50 hover:text-green hover:border-green transition-all
                xs:text-xs"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    letter: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>