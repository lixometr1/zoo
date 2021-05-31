<template>
  <div class="wishlist-sort flex-y-center">
    <div
      class="flex items-center font-medium  sm:hidden"
      v-if="cnt < 1"
    >
      <span class="text-opacity-50 text-grey">{{ $t('sort') }}:</span>
      <div class="w-[220px] ml-3 ">
        <ASelect
          v-model="sortModel"
          label="name"
          :reduce="(item) => item.value"
          :options="options"
          class="sm:text-sm"
        />
      </div>
    </div>
    <div class="sm:flex hidden">
      <MobileSelect v-model="sortModel" :items="options">
        <div class="flex-y-center">
          <svgSort width="18" class="text-green mr-1.5" />
          <span class="font-bold text-xs">{{ sortModel }}</span>
        </div>
      </MobileSelect>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgSort from '@/assets/icons/sort.svg?inline'
export default defineComponent({
  components: { svgSort },
  props: { value: String, cnt: Number },
  setup(props, { emit }) {
    const sortModel = computed({
      get() {
        return props.value || 'По умолочанию'
      },
      set(val: any) {
        emit('input', val)
      },
    })
    const options = computed(() => {
      return [
        { name: 'По умолочанию', value: 'По умолочанию' },
        { name: 'По возрастанию', value: 'По возрастанию' },
      ]
    })
    return { sortModel, options }
  },
})
</script>

<style lang="postcss">
.wishlist-sort {
  .app-select {
    .vs__dropdown-toggle {
      @apply !bg-grey-600;
    }
  }
}
</style>