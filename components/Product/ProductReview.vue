<template>
  <div class="flex items-center sm:flex-col sm:items-start">
    <div class="flex sm:mb-2.5">
      <StarsPanel :stars="stars">
        <div class="ml-2.5 text-lg sm:text-sm">
          <span class="font-semibold">
            {{ total }}
          </span>
          <span class="text-grey text-opacity-50 font-medium lowercase">{{
            reviewText
          }}</span>
        </div>
      </StarsPanel>
    </div>
    <a
      class="
        ml-4
        font-semibold
        border-circle-grey
        text-grey
        opacity-50
        text-sm
        hover:opacity-100
        transition
        sm:ml-0
      "
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
import { ModalName } from '~/types/modal.enum'
import useModal from '~/utils/compositions/useModal'
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
    const sendReview = () => {
      const { showByName } = useModal()
      showByName(ModalName.sendReview)
    }
    const reviewsSclon = useContext().i18n.t('reviews') as any as string[]
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