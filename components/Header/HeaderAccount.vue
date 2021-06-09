<template>
  <div class="flex items-center">
    <svgUser class="mr-4 text-grey" alt="user" width="22" />
    <a
      href="#"
      class="cursor-pointer border-circle-grey text-sm font-bold"
      @click.prevent="login"
      >{{ $t('enter') }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgUser from '@/assets/icons/user.svg?inline'
import useModal from '~/utils/compositions/useModal'
import { ModalName } from '~/types/modal.enum'
export default defineComponent({
  components: { svgUser },
  setup() {
    const login = () => {
      const { showByName } = useModal()
      showByName(ModalName.login)
    }
    return {
      login,
    }
  },
})
</script>

<style lang="postcss">
</style>