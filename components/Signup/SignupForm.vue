<template>
  <form action="#" @submit.prevent="onSubmit">
    <InputName v-model="data.name" class="mb-3.5 sm:mb-3" :required="true" />
    <InputSurname v-model="data.surname" class="mb-10 sm:mb-9" :required="true" />
    <InputEmail v-model="data.email" class="mb-3.5 sm:mb-3" :required="true" />
    <InputPhone v-model="data.phone" class="mb-10 sm:mb-9" />
    <InputPassword
      v-model="data.password"
      class="mb-3.5 sm:mb-3"
      :label="$t('password')"
      :required="true"
    />
    <InputPassword
      v-model="data.passwordRepeat"
      :label="$t('passwordConfirm')"
      :required="true"
    />
    <div class="mt-6">
      <ACheckboxInput
        v-model="data.agreement"
        class="text-left"
        labelClass="!leading-5"
      >
        <template #label>
          <span
            class="block text-grey text-opacity-50 text-sm sm:inline-block sm:text-xs"
            >{{ $t('IAgreeWithPolicy[0]') }}</span
          >
          <a
            href="#"
            class="text-green border-b-2 border-green border-opacity-50 border-dotted font-medium uppercase text-sm hover:border-solid transition-all sm:text-xs"
            >{{ $t('IAgreeWithPolicy[1]') }}</a
          >
        </template>
      </ACheckboxInput>
    </div>
    <button type="submit" class="btn-green mt-7 w-full sm:text-sm sm:!py-4">
      {{ $t('register') }}
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const onSubmit = () => {}
    const data = ref({
      agreement: true,
    })
    return { onSubmit, data }
  },
})
</script>

<style lang="postcss">
</style>