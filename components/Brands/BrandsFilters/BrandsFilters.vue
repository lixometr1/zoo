<template>
  <div class="flex md:flex-col md:items-start brands-filters">
    <div
      class="flex items-stretch space-x-2 flex-1 h-12 md:h-auto md:flex-wrap md:w-full md:space-x-0"
    >
      <BrandsFiltersSearch
        class="flex-1 min-w-0 md:w-full md:flex-none md:mb-2 sm:mb-4"
      />
      <BrandsFiltersLetter class="md:!mr-2 sm:!ml-auto sm:order-2" />
      <BrandsFiltersCategory  />
    </div>
    <div class="ml-4 md:ml-auto md:mt-4 sm:mt-1">
      <BrandsFiltersView v-model="viewModel" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    view: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const viewModel = computed({
      get() {
        return props.view
      },
      set(val: string) {
        emit('update:view', val)
      },
    })
    return { viewModel }
  },
})
</script>

<style lang="postcss">
.brands-filters {
  .app-select {
    .vs__selected, input::placeholder {
      @apply text-grey text-opacity-70 font-medium;
    }
  }
}
</style>