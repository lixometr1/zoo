<template>
  <div class="pt-5.5 mt-5 border-t border-grey border-opacity-30 leading-none">
    <router-link class="text-blue text-lg font-bold flex-y-center" to="#">
      <span> {{ $t('all') }}</span>
      <span class="lowercase ml-1">{{ $t('categories[1]') }}</span>
      <svgArrowRight class="ml-2" width="5" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowRight from '@/assets/icons/arrow_right_triangle.svg?inline'

export default defineComponent({
  components: { svgArrowRight },

  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>