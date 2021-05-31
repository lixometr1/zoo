<template>
  <div class="flex-y-center flex-col sm:flex-row">
    <CabinetUserAvatar class="mb-2 sm:mb-0 sm:mr-4" />
    <div class="flex-y-center flex-col sm:items-start">
      <div class="font-bold text-lg sm:text-sm">
        {{ fullName }}
      </div>
      <div class="text-sm text-grey text-opacity-60 sm:text-xs">
        {{ email }}
      </div>
      <a
        href="javascript:void(0)"
        class="mt-2 flex-y-center text-grey text-opacity-50 hover:text-green transition-all text-sm font-bold sm:text-xs" 
        @click.prevent="exit"
        ><svgExit width="17" class="mr-2 sm:w-3" />{{ $t('exit') }}</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgExit from '@/assets/icons/logout.svg?inline'
export default defineComponent({
  components: { svgExit },
  setup() {
    const fullName = computed(() => 'Андрей Маринович')
    const email = computed(() => 'xolxllz@gmail.com')
    const exit = () => {}
    return { fullName, email, exit }
  },
})
</script>

<style lang="postcss">
</style>