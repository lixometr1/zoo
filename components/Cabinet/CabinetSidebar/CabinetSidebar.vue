<template>
  <div>
    <CabinetSidebarUser :isAuth="isAuth" />
    <CabinetSidebarMenu class="mt-7" :isAuth="isAuth" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isAuth = ref(true)
    return { isAuth }
  },
})
</script>

<style lang="postcss">
</style>