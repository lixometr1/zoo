<template>
  <div class="brands-filters-view">
    <div
      class="brands-filters-view__item mr-2"
      :class="{ active: value === 'text' }"
      @click="chooseItem('text')"
    >
      <svgList />
      <span>{{ $t('byList') }}</span>
    </div>
    <div
      class="brands-filters-view__item"
      :class="{ active: value === 'grid' }"
      @click="chooseItem('grid')"
    >
      <svgGrid />
      <span>{{ $t('byGrid') }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgList from '@/assets/icons/list.svg?inline'
import svgGrid from '@/assets/icons/grid.svg?inline'
export default defineComponent({
  components: { svgList, svgGrid },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const chooseItem = (newValue: string) => {
      emit('input', newValue)
    }
    return { chooseItem }
  },
})
</script>

<style lang="postcss">
.brands-filters-view {
  @apply flex h-full;
  &__item {
    @apply w-12 h-12 rounded-md border border-grey-light flex-center text-grey text-opacity-50
            cursor-pointer hover:bg-green hover:bg-opacity-20 hover:text-green transition-all
            xs:h-9 xs:w-9 ;
    svg {
      @apply w-5.5 xs:w-4;
    }
    span {
      @apply hidden ml-2.5 font-medium;
    }
    &.active {
      @apply text-white w-auto bg-green px-5 xs:px-3;
      span {
        @apply block;
      }
    }
  }
}
</style>