<template>
  <div class="flex app-pagination">
    <client-only>
      <VPaginate
        :value="page"
        :page-range="pageRange"
        :page-count="10"
        :prev-text="svgArrowLeft"
        :next-text="svgArrowRight"
        next-class="app-pagination__next"
        prev-class="app-pagination__prev"
        container-class="app-pagination__container"
        page-class="app-pagination__page"
        page-link-class="app-pagination__page-link"
        @input="changePage"
      >
      </VPaginate>
    </client-only>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgArrowLeft from '@/assets/icons/arrow_left_triangle.svg?raw'
import svgArrowRight from '@/assets/icons/arrow_right_triangle.svg?raw'
import useResize from '~/utils/compositions/useResize'
import { Breakpoints } from '~/types/constants'
export default defineComponent({
  props: {
    totalPages: Number,
    page: Number,
  },
  setup(props, { emit }) {
    const changePage = (newPage: number) => {
      emit('input', newPage)
    }
    const pageRange = ref(4)
    useResize((wW) => {
      if (wW < Breakpoints.md) {
        pageRange.value = 3
      } else {
        pageRange.value = 4
      }
    })
    return { changePage, pageRange, svgArrowRight, svgArrowLeft }
  },
})
</script>

<style lang="postcss">
.app-pagination {
  @apply select-none;
  &__next,
  &__prev {
    @apply w-[8px];
  }
  &__next {
    @apply sm:relative sm:left-3;
  }
  &__prev {
    @apply sm:mr-2.5;
  }
  &__container {
    @apply flex items-center justify-center space-x-4 sm:space-x-1.5;
  }
  &__page {
    &-link {
      @apply w-9 h-9 rounded-full border-2 border-transparent 
            flex items-center justify-center cursor-pointer
            sm:text-sm sm:w-7 sm:h-7;
      &:hover {
        @apply bg-[#A2A5AC] border-white text-white;
      }
    }
    &.active {
      .app-pagination__page-link {
        @apply bg-green border-white text-white;
      }
    }
  }
}
</style>