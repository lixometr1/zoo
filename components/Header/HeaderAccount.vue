<template>
  <div class="flex items-center">
    <svgUser class="mr-4 text-grey" alt="user" />
    <a
      href="#"
      class="cursor-pointer border-circle-grey text-sm font-bold"
      @click.prevent="login"
      >{{ $t('enter') }}</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgUser from '@/assets/icons/user.svg?inline'
export default defineComponent({
  components: { svgUser },
  setup() {
    const login = () => {}
    return {
      login,
    }
  },
})
</script>

<style lang="postcss">
</style>