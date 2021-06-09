<template>
  <ModalContent class="send-review-modal" v-on="$listeners">
    <h4 class="sm:text-lg">{{ $t('createReview.title') }}</h4>
    <div class="font-medium text-grey text-opacity-70 mt-1">
      {{ $t('createReview.subTitle') }}
    </div>
    <SendReviewForm class="mt-8" @submit="$emit('close')" />
  </ModalContent>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.send-review-modal {
  @apply w-full max-w-[700px] max-h-[90%] pt-18 px-14 pb-14 text-center
        xs:max-w-full xs:w-[90%] md:px-10 md:pt-14 sm:px-5.5 sm:pt-12 sm:pb-7;
}
</style>