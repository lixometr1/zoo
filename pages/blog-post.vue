<template>
  <div>
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <BlogPostHero />
      <div class="flex mt-16 md:flex-col" sticky-container>
        <BlogPostContent class="flex-1 mr-20 lg:mr-12" />
        <div class="w-[400px] sm:w-full flex-shrink-0">
          <BlogPostSidebar
            v-sticky="shouldStick"
            sticky-side="0"
            sticky-offset="{top: 30, bottom: 0}"
          />
        </div>
      </div>
      <BlogOtherArticles class="mt-24 md:hidden" />
    </div>
    <BlogPostComments class="mt-16"/>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  provide,
  ref,
} from '@nuxtjs/composition-api'
import { Breakpoints } from '~/types/constants'
import useResizeValue from '~/utils/compositions/useResizeValue'

export default defineComponent({
  setup() {
    const breadcrumbs = computed(() => {
      return [
        {
          name: 'Товары для кошек',
        },
        {
          name: 'Корм и лакомства для кошек',
        },
      ]
    })
    provide('post', ref({}))
    const { value: shouldStick } = useResizeValue((wWidth) => {
      return wWidth > Breakpoints.md
    })
    return { breadcrumbs, shouldStick }
  },
})
</script>

<style lang="postcss">
</style>