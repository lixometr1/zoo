<template>
  <div>
    <CabinetPersonalDataAccordion
      :label="$t('dateOfBirth')"
      @approve="onApprove"
      @deny="onDeny"
    >
      <div>
        <CustomDatePicker v-model="date" />
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
    const date = ref('')

    return { onDeny, onApprove, date }
  },
})
</script>

<style lang="postcss">
</style>