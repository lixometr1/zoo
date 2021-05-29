<template>
  <AInput v-bind="$attrs" :type="inputType" v-on="$listeners">
    <template #prefix>
      <svgLock width="14" class="text-grey text-opacity-50" />
    </template>
    <template #sufix>
      <span
        class="text-grey opacity-50 cursor-pointer select-none"
        @click.prevent="toggleType"
      >
        <svgEyeClose v-if="inputType === 'password'" width="15" />
        <svgEye v-else width="16" />
      </span>
    </template>
  </AInput>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgLock from '@/assets/icons/lock.svg?inline'
import svgEyeClose from '@/assets/icons/eye_close.svg?inline'
import svgEye from '@/assets/icons/eye.svg?inline'
export default defineComponent({
  components: { svgLock, svgEyeClose, svgEye },
  setup() {
    const inputType = ref('password')
    const toggleType = () => {
      if (inputType.value === 'password') {
        inputType.value = 'text'
      } else {
        inputType.value = 'password'
      }
    }
    return { inputType, toggleType }
  },
})
</script>

<style lang="postcss">
</style>