<template>
  <div class="cabinet-personal-data-personal">
    <CabinetPersonalDataAccordion
      :label="$t('personalData')"
      @approve="onApprove"
      @deny="onDeny"
    >
      <div>
        <div class="font-medium opacity-50 mb-1.5 sm:text-sm sm:mb-2">
          {{ $t('yourGender') }}
        </div>
        <ARadioGroup
          v-model="gender"
          :items="genderOptions"
          class="flex flex-row space-x-5.5 space-y-0 sm:!text-sm"
        />
      </div>
    </CabinetPersonalDataAccordion>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const onDeny = ({ close }: { close: () => void }) => {
      close()
    }
    const onApprove = ({ close }: { close: () => void }) => {
      close()
    }
    const gender = ref('')
    const { i18n } = useContext()
    const genderOptions = [
      {
        label: i18n.t('gender.male'),
        value: 'male',
      },
      {
        label: i18n.t('gender.female'),
        gender: 'female',
      },
    ]
    return { onDeny, onApprove, gender, genderOptions }
  },
})
</script>

<style lang="postcss">
.cabinet-personal-data-personal {
  .app-radio-button{
    &__label {
      @apply sm:text-sm;
    }
  }
}
</style>