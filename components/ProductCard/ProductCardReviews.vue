<template>
  <div>
    <StarsPanel v-if="hasReviews" v-bind="$attrs" :stars="stars">
      <div class="ml-1 text-sm font-semibold">{{ total }}</div>
    </StarsPanel>
    <div v-else class="flex items-center text-blue text-sm">
      <svgReviews class="w-5.5 mr-2" />
      <a href="#" @click.prevent="sendReview">
        {{ $t('leftReview') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  inheritAttrs: false,
  props: {
    stars: Number,
    total: Number,
    hasReviews: Boolean,
  },
  setup(props) {
    const sendReview = () => {}
    return { sendReview }
  },
})
</script>

<style lang="postcss">
</style>