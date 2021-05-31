<template>
  <div class="flex-y-center flex-col sm:flex-row">
    <CabinetUserAvatar class="mb-2 sm:mb-0 sm:mr-4" />
    <div class="flex-y-center flex-col sm:items-start">
      <div class="font-bold text-lg sm:text-sm">
        {{ $t('guest') }}
      </div>
      <div class="text-sm text-grey text-opacity-60 sm:text-xs uppercase">
        {{ $t('dontHaveAccount') }}
      </div>
      <a
        href="javascript:void(0)"
        class="mt-2 flex-y-center text-green hover:underline transition-all text-sm font-bold sm:text-xs sm:mt-1"
        @click.prevent="createAccount"
        ><svgPencil width="17" class="mr-2 sm:w-3" />{{
          $t('createItRightNow')
        }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgPencil from '@/assets/icons/pencil.svg?inline'
export default defineComponent({
  components: { svgPencil },
  setup() {
    const createAccount = () => {}

    return { createAccount }
  },
})
</script>

<style lang="postcss">
</style>