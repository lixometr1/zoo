<template>
  <div class="text-center">
    <CabinetUserAuth v-if="isAuth" />
    <CabinetUserGuest v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isAuth = computed(() => true)
    return { isAuth }
  },
})
</script>

<style lang="postcss">
</style>