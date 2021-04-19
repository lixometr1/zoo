<template>
  <div class="flex items-center">
    <img src="@/assets/icons/user.svg" class="mr-4" alt="user" />
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

export default defineComponent({
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