<template>
  <div class="header-search">
    <SearchInput @search="search" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import useResizeValue from '@/utils/compositions/useResizeValue'
export default defineComponent({
  setup() {
    const search = () => {}

    return {
      search,
    }
  },
})
</script>

<style lang="postcss">
.header-search {
}
</style>