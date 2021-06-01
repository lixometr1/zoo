<template>
  <form action="#" @submit.prevent="onSubmit">
    <InputEmail v-model="email" />
    <button type="submit" class="btn-green mt-5.5 mx-auto w-[230px] sm:w-full md:mt-3 sm:text-sm">
      {{ $t('restorePassword.btn') }}
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(props, { emit }) {
    const onSubmit = () => {
      emit('submit')
    }
    return { onSubmit }
  },
})
</script>

<style lang="postcss">
</style>