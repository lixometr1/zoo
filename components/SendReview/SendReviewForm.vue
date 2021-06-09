<template>
  <form class="send-review-form" action="#" @submit.prevent="onSubmit">
    <SendReviewStars v-model="stars" class="mb-8 xs:mb-5" />
    <div class="space-y-3.5">
      <div class="flex space-x-3.5 sm:flex-col sm:space-x-0 sm:space-y-3.5">
        <InputName v-model="data.name" label="Name" class="flex-1" />
        <InputEmail v-model="data.email" class="flex-1" :required="true" />
      </div>
      <AInput v-model="data.advantages" :label="$t('advantages')">
        <template #prefix>
          <svgAdvantages width="18" class="text-grey opacity-50" />
        </template>
      </AInput>
      <AInput v-model="data.disadvantages" :label="$t('disadvantages')">
        <template #prefix>
          <svgDisadvantages width="18" class="text-grey opacity-50" />
        </template>
      </AInput>
      <ATextArea
        v-model="data.comment"
        :label="$t('createReview.productComment')"
        :inputAttrs="{ class: 'sm:leading-4' }"
      >
        <template #prefix>
          <svgComment
            width="18"
            class="text-grey text-opacity-50 relative top-1.5"
          />
        </template>
      </ATextArea>

      <SendReviewPhoto v-model="data.photos" />
    </div>
    <div>
      <div class="!mt-8 flex justify-center text-left">
        <ACheckboxInput
          :label="$t('createReview.infoAboutEmail')"
          labelClass="!text-base sm:!text-sm"
          v-model="data.sendMail"
        />
      </div>
      <button
        type="submit"
        class="btn-green send-review-form__btn mx-auto mt-7 w-48 sm:text-sm"
      >
        {{ $t('leftReview') }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgAdvantages from '@/assets/icons/advantages.svg?inline'
import svgDisadvantages from '@/assets/icons/disadvantages.svg?inline'
import svgComment from '@/assets/icons/comment.svg?inline'
export default defineComponent({
  components: { svgAdvantages, svgDisadvantages, svgComment },
  setup(props, { emit }) {
    const stars = ref(null)
    const onSubmit = () => {
      emit('submit')
    }
    const data = ref({})
    return { onSubmit, stars, data }
  },
})
</script>

<style lang="postcss">
.send-review-form {
  .app-input,
  .app-text-area {
    &__inner {
      @apply bg-white;
    }
  }
  &__btn {
    box-shadow: 0 5px 20px rgba(32, 194, 89, 0.5);
  }
}
</style>
