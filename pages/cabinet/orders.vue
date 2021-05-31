<template>
  <div>
    <h3 v-if="hasOrders" class="mb-10 sm:mb-5.5">
      {{ $t('myOrders') }}
    </h3>
    <CabinetOrdersItems v-if="hasOrders" />
    <CabinetOrdersEmpty v-else />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const hasOrders = computed(() => true)
    return { hasOrders }
  },
})
</script>

<style lang="postcss">
</style>