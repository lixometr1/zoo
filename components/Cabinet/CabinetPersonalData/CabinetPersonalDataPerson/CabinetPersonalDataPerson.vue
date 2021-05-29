<template>
  <div
    class="cabinet-personal-data-card"
  >
    <CabinetPersonalDataPersonEdit v-if="isEdit" @done="toggleEdit"/>
    <CabinetPersonalDataPersonInfo v-else @edit="toggleEdit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isEdit = ref(false)
    const toggleEdit = () => {
      isEdit.value = !isEdit.value
    }
    return { isEdit, toggleEdit }
  },
})
</script>

<style lang="postcss">
</style>