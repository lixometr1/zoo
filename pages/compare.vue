<template>
  <div class="page-compare sm:pb-5">
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
    </div>

    <div
      class="container !pr-0 !max-w-full mt-14 md:mt-8"
      :style="{ paddingLeft: offsetLeft }"
    >
      <div class="flex md:flex-col relative">
        <div class="w-[280px] flex-shrink-0 flex flex-col pb-18 md:w-full md:pb-12 sm:pb-8">
          <CompareSidebar class="pr-4 md:pr-5.5" :filter.sync="filter" />
          <CompareCharacteristics class="mt-auto md:absolute md:bottom-12 sm:bottom-7 md:bg-grey-bg md:z-20" />
        </div>
        <div class="flex-1 min-w-0">
          <CompareItems />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { Breakpoints } from '~/types/constants'
import useResizeValue from '~/utils/compositions/useResizeValue'

export default defineComponent({
  name: "Comapare",
  setup() {
    const breadcrumbs = [
      {
        name: 'Товары для собак',
      },
      {
        name: 'Корм и лакомства для кошек',
      },
    ]
    const filter = ref('')
    const { value: offsetLeft } = useResizeValue((wWidth) => {
      if (wWidth < Breakpoints.xl + 44) return
      let offset = (wWidth - 1450) / 2
      offset = Math.max(offset, 15)
      return offset + 'px'
    })
    return { breadcrumbs, filter, offsetLeft }
  },
})
</script>

<style lang="postcss">
</style>