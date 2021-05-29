<template>
  <div class="flex-y-center flex-col">
    <CabinetUserAvatar class="mb-2" />
    <div class="font-bold text-lg">
      {{ fullName }}
    </div>
    <div class="text-sm text-grey text-opacity-60">
      {{ email }}
    </div>
    <a
      href="javascript:void(0)"
      class="mt-2 flex-y-center text-grey text-opacity-50 hover:text-green transition-all text-sm font-bold"
      @click.prevent="exit"
      ><svgExit width="17" class="mr-2" />{{ $t('exit') }}</a
    >
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