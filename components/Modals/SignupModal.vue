<template>
  <ModalContent class="signup-modal" v-on="$listeners">
    <svgReturnBack
      width="23"
      class="absolute left-7 top-7 cursor-pointer text-grey opacity-50 hover:opacity-100 transition-all   sm:top-5 sm:left-5"
      @click="goToLogin"
    />
    <h3>{{ $t('signup.title') }}</h3>
    <div class="mt-1 opacity-70 leading-5 w-10/12 mx-auto sm:leading-4">
      {{ $t('signup.description') }}
    </div>
    <SignupForm class="mt-4.5" @submit="onLogin" />
  </ModalContent>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgReturnBack from '@/assets/icons/return_back.svg?inline'
import useModal from '~/utils/compositions/useModal'
import { ModalName } from '~/types/modal.enum'
export default defineComponent({
  components: { svgReturnBack },
  setup(props, { emit }) {
    const goToLogin = () => {
      emit('close')
      const { showByName } = useModal()
      showByName(ModalName.login)
    }
    return { goToLogin }
  },
})
</script>

<style lang="postcss">
.signup-modal {
  @apply max-w-[440px] max-h-[90%] pt-20 px-14 pb-16 text-center
        xs:max-w-full xs:w-[90%] md:px-10 md:pt-14 sm:px-5.5 sm:pt-12 sm:pb-7;
}
</style>