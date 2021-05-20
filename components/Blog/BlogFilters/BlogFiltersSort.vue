<template>
  <div>
    <div class="flex items-center font-medium lg:flex-col lg:items-start lg:-mt-5 ">
      <span class="text-opacity-50 text-grey">{{ $t('sort') }}:</span>
      <div class="w-[220px] ml-3 lg:ml-0">
        <ASelect
          v-model="sortModel"
          :options="['По умолочанию', 'По возрастанию']"
          class="sm:text-sm"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: String,
  },
  setup(props, { emit }) {
    const sortModel = computed({
      get() {
        return props.value || 'По умолочанию'
      },
      set(val) {
        emit('input', val)
      },
    })
    return { sortModel }
  },
})
</script>

<style lang="postcss">
</style>