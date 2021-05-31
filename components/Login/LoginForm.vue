<template>
  <form action="#" @submit.prevent="onSubmit">
    <AInput
      v-model="login"
      :label="$t('login.loginPlaceholder')"
      class="mb-3.5 "
    >
      <template #prefix>
        <svgEmail width="18" class="text-grey text-opacity-50" />
      </template>
    </AInput>
    <InputPassword v-model="password" :label="$t('password')" />
    <div class="text-right mt-2">
      <a
        href="javascript:void(0)"
        class="border-circle-grey opacity-50 transition-opacity hover:opacity-100"
        @click.prevent="onForgotPassword"
      >
        {{ $t('forgotPassword') }}?
      </a>
    </div>
    <div class="flex-x-center">
      <button type="submit" class="btn-green mt-8 w-10/12 sm:text-sm sm:w-full sm:!py-4 sm:mt-7">
        {{ $t('enter') }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgEmail from '@/assets/icons/email.svg?inline'
import useModal from '~/utils/compositions/useModal'
import { ModalName } from '~/types/modal.enum'
export default defineComponent({
  components: { svgEmail },
  setup(props, { emit }) {
    const password = ref('')
    const login = ref('')
    const onSubmit = () => {}
    const onForgotPassword = () => {
      emit('submit')
      const { showByName } = useModal()
      showByName(ModalName.restore)
    }

    return { onSubmit, password, onForgotPassword, login }
  },
})
</script>

<style lang="postcss">
</style>