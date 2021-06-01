<template>
  <div class="header-search">
    <SearchInput @search="search" :label="inpPlaceholder" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import useResizeValue from '@/utils/compositions/useResizeValue'
import { Breakpoints } from '~/types/constants'
export default defineComponent({
  setup() {
    const search = () => {}
    const placeholderTexts = {
      desktop: useContext().i18n.t('searchPlaceholder'),
      mob: useContext().i18n.t('searchPlaceholderMob'),
    }
    const { value: inpPlaceholder } = useResizeValue((wWidth) => {
      if (wWidth < Breakpoints.md) {
        return placeholderTexts.mob
      } else {
        return placeholderTexts.desktop
      }
    })
    return {
      inpPlaceholder,
      search,
    }
  },
})
</script>

<style lang="postcss">
.header-search {
}
</style>