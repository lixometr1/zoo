<template>
  <div class="flex items-center">
    <div class="flex space-x-1.5">
      <StarHandler
        v-for="item in 5"
        :key="item"
        class="w-[18px] text-yellow"
        :active="item <= stars"
        v-bind="$attrs"
      />
    </div>
    <div class="ml-4 text-lg">
      <span class="font-semibold">
        {{ total }}
      </span>
      <span class="text-grey text-opacity-50 font-medium lowercase">{{
        reviewText
      }}</span>
    </div>
    <a
      class="ml-4 font-semibold border-circle-grey text-grey opacity-50 text-sm hover:opacity-100 transition"
      href="#"
      @click.prevent="sendReview"
    >
      {{ $t('leftReview') }}
    </a>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'
import useWordSclon from '~/utils/compositions/useWordSclon'

export default defineComponent({
  props: {
    total: {
      type: Number,
      default: 0,
    },
    stars: Number,
  },
  setup(props) {
    const { total } = toRefs(props)
    const sendReview = () => {}
    const reviewsSclon = (useContext().i18n.t('reviews') as any) as string[]
    const reviewText = computed(() => {
      const { exec } = useWordSclon(reviewsSclon)
      return exec(total.value)
    })
    return { sendReview, reviewText }
  },
})
</script>

<style lang="postcss">
</style>