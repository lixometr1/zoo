<template>
  <div>
    <div class="max-w-[640px]">
      <h3 class="sm:leading-5">
        {{ $t('toActiveBonusApprovePhone') }}
      </h3>
      <div class="opacity-70 mt-2">
        {{ $t('smsWasSentOnGivenNumber') }}
      </div>
    </div>
    <div class="mt-7 sm:mt-4">
      <div v-if="isEdit" class="flex-y-center">
        <InputPhone v-model="phone" class="w-[280px] xs:w-full" />
        <!-- <button class="btn-green" type="button" @click="savePhone">{{$t('savePhone')}}</button> -->
      </div>
      <div v-else class="flex-y-center sm:flex-col sm:items-start">
        <div class="text-2lg mr-8 sm:mr-0 sm:text-lg">
          {{ phone }}
        </div>
        <a
          href="javascript:void(0)"
          class="border-circle-grey opacity-70 hover:opacity-100 transition-all sm:mt-1"
          @click.prevent="changePhoneNumber"
          >{{ $t('changePhoneNumber') }}</a
        >
      </div>
    </div>
    <button
      type="button"
      class="btn-green mt-6 w-[200px] xs:w-full sm:text-sm sm:mt-4"
      @click.prevent="sendSms"
    >
      {{ $t('sendSms') }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: String,
  },
  setup(props, { emit }) {
    const isEdit = ref(false)
    const phone = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('input', val)
      },
    })
    const changePhoneNumber = () => {
      isEdit.value = true
    }
    const sendSms = () => {
      emit('send')
    }
    const savePhone = () => {
      isEdit.value = false
    }
    return { phone, changePhoneNumber, sendSms, isEdit, savePhone }
  },
})
</script>

<style lang="postcss">
</style>