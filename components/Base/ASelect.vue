<template>
  <div class="app-select-wrapper">
    <VSelect class="app-select" v-bind="_attrs" v-on="_listeners">
      <template #open-indicator="{ attributes }">
        <span v-bind="attributes">
          <svgArrowDown width="8" class="text-grey" />
        </span>
      </template>
      <template #option="option">
        <slot name="option" v-bind="option"> </slot>
      </template>
      <template #selected-option="option">
        <slot name="selected-option" v-bind="option"> </slot>
      </template>
    </VSelect>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgArrowDown from '@/assets/icons/arrow_down_triangle.svg?inline'
export default defineComponent({
  components: { svgArrowDown },
  inheritAttrs: false,
  props: {
    selectClass: [String, Array, Object],
  },
  setup(props, { listeners, attrs }) {
    const _attrs = computed(() => {
      return {
        clearable: false,
        searchable: false,
        class: props.selectClass,
        ...attrs,
      }
    })
    const _listeners = computed(() => {
      return {
        ...listeners,
      }
    })
    return { _attrs, _listeners }
  },
  computed: {},
})
</script>

<style lang="postcss">
.app-select {
  .vs__dropdown-toggle {
    @apply rounded-md border border-grey-light px-3 py-2 bg-white h-full;
  }
  .vs__dropdown-menu {
    @apply bg-white border border-grey-light rounded-b-5 shadow-none;
  }
  .vs__dropdown-option {
    @apply bg-white hover:text-white hover:bg-green text-grey;
  }
  &.vs--open {
    .vs__dropdown-toggle {
      @apply rounded-t-5 rounded-b-none;
    }
  }
}
</style>