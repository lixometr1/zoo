<template>
  <div class="cabinet-personal-data-delete">
    <CabinetPersonalDataAccordion
      :label="$t('deleteAccount')"
      @approve="onApprove"
      @deny="onDeny"
    >
      <div>
        <ACheckboxInput
          v-model="agreement"
          :label="$t('deleteAccountText')"
          labelClass="!text-base !font-medium !leading-5 sm:!text-sm"
          class="!items-start"
        />
        <ATextArea v-model="comment" :label="$t('deleteCause')" class="mt-5 sm:mt-3">
          <template #prefix>
            <svgComment width="17" class="text-grey text-opacity-50  relative top-1" />
          </template>
        </ATextArea>
      </div>
    </CabinetPersonalDataAccordion>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import svgComment from '@/assets/icons/comment.svg?inline'
export default defineComponent({
  components: { svgComment },
  setup() {
    const onDeny = ({ close }: { close: () => void }) => {
      close()
    }
    const onApprove = ({ close }: { close: () => void }) => {
      close()
    }

    const agreement = ref(true)
    const comment = ref('')
    return { onDeny, onApprove, agreement, comment }
  },
})
</script>

<style lang="postcss">
.cabinet-personal-data-delete {
  .app-text-area {
    &__inner {
      @apply bg-white;
    }
  }
}
</style>