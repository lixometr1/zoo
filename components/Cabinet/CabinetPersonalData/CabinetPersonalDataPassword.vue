<template>
  <div class="cabinet-personal-data-password">
    <CabinetPersonalDataAccordion
      :label="$t('changePassword')"
      @approve="onApprove"
      @deny="onDeny"
    >
      <div class="space-y-3.5">
        <InputPassword v-model="oldPassword" :label="$t('oldPassword')"  />
        <InputPassword v-model="newPassword" :label="$t('newPassword')" />
        <InputPassword
          v-model="newPasswordRepeat"
          :label="$t('passwordConfirm')"
        />
      </div>
    </CabinetPersonalDataAccordion>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const onDeny = ({ close }: { close: () => void }) => {
      close()
    }
    const onApprove = ({ close }: { close: () => void }) => {
      close()
    }
    const oldPassword = ref('')
    const newPassword = ref('')
    const newPasswordRepeat = ref('')
    return { onDeny, onApprove, oldPassword, newPasswordRepeat, newPassword }
  },
})
</script>

<style lang="postcss">
.cabinet-personal-data-password {
  .app-input {
    &__inner {
      @apply bg-white;
    }
  }
}
</style>