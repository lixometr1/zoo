<template>
  <ModalContent class="login-modal" v-on="$listeners">
    <h3>{{ $t('login.title') }}</h3>
    <div class="mt-1 opacity-70 leading-5 w-10/12 mx-auto sm:leading-4">
      {{ $t('login.description') }}
    </div>
    <LoginForm @submit="onLogin" class="mt-4" />
    <LoginSoc class="mt-10 sm:mt-5" />
    <LoginFooter class="mt-5.5 sm:mt-3.5" @close="$emit('close')" />
  </ModalContent>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  setup(props, { emit }) {
    const onLogin = () => {
      emit('close')
    }
    return { onLogin }
  },
})
</script>

<style lang="postcss">
.login-modal {
  @apply max-w-[450px] max-h-[90%] pt-20 px-14 pb-14 text-center
        xs:max-w-full xs:w-[90%] md:px-10 md:pt-14 sm:px-5.5 sm:pt-12 sm:pb-7;
}
</style>