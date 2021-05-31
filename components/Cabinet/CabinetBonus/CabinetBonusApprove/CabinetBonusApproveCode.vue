<template>
  <div>
    <div class="max-w-[540px]">
      <h3 class="sm:leading-5">
        {{ $t('onNumber') }} <span class="text-green">{{ phone }}</span>
        {{ $t('wasSentSmsWithCode') }}
      </h3>
      <div class="opacity-70 mt-1.5">
        {{ $t('enterSmsCode') }}
      </div>
    </div>
    <form
      action="#"
      class="flex mt-5 w-[400px] h-12 xs:w-full xs:flex-col xs:h-auto"
      @submit.prevent="onSubmit"
    >
      <AInput
        v-model="code"
        :label="$t('codeFromSms')"
        class="flex-1 min-w-0 mr-3.5 xs:w-full xs:mr-0 xs:mb-2"
      >
        <template #prefix>
          <svgTicket class="text-grey opacity-50" width="18" />
        </template>
      </AInput>
      <button type="submit" class="btn-green flex-1 sm:text-sm xs:w-full">
        {{ $t('approve') }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgTicket from '@/assets/icons/ticket.svg?inline'
export default defineComponent({
  components: { svgTicket },
  props: {
    phone: String,
  },
  setup() {
    const code = ref('')
    const onSubmit = () => {}
    return { code, onSubmit }
  },
})
</script>

<style lang="postcss">
</style>