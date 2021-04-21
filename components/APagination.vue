<template>
  <div class="flex app-pagination">
    <client-only> 
      <VPaginate
        :value="page"
        :page-range="4"
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
export default defineComponent({
  props: {
    totalPages: Number,
    page: Number,
  },
  components: {},
  setup(props, { emit }) {
    const changePage = (newPage: number) => {
      emit('input', newPage)
    }
    return { changePage, svgArrowRight, svgArrowLeft }
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
  &__container {
    @apply flex items-center justify-center space-x-4;
  }
  &__page {
    &-link {
      @apply w-9 h-9 rounded-full border-2 border-transparent 
            flex items-center justify-center cursor-pointer;
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