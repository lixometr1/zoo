<template>
  <div>
    <div class="flex space-x-1.5" v-if="hasReviews">
      <StarHandler
        class="w-[18px] text-yellow"
        v-for="item in 5"
        :key="item"
        :active="item <= stars"
        v-bind="$attrs"
      />
      <div class="ml-4 text-sm font-semibold">{{ total }}</div>
    </div>
    <div class="flex items-center text-blue text-sm" v-else>
      <svgReviews class="w-5.5 mr-2" />
      <a href="#" @click.prevent="sendReview">
        {{ $t('leftReview') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgReviews from '@/assets/icons/set_review.svg?inline'
export default defineComponent({
  inheritAttrs: false,
  components: { svgReviews },
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