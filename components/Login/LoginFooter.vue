<template>
  <div class="flex-y-center flex-col">
    <div class="uppercase font-medium mb-1.5 opacity-50">
      {{ $t('dontHaveAccount') }}
    </div>
    <a
      href="javascript:void(0)"
      class="text-green hover:underline flex-y-center font-bold"
      @click.prevent="createAccount"
    >
      <svgPencil width="14" class="mr-2" />{{ $t('createItRightNow') }}!
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgPencil from '@/assets/icons/pencil.svg?inline'
import useModal from '~/utils/compositions/useModal'
import { ModalName } from '~/types/modal.enum'
export default defineComponent({
  components: { svgPencil },
  setup(props, { emit }) {
    const createAccount = () => {
      const { showByName } = useModal()
      emit('close')
      showByName(ModalName.signup)
    }
    return { createAccount }
  },
})
</script>

<style lang="postcss">
</style>