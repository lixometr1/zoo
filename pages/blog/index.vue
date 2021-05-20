<template>
  <div class="page-blog">
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <div class="flex md:flex-col" sticky-container>
        <div
          class="w-1/3 xl:w-[300px] flex-shrink-0 xl:mr-12 lg:mr-8 md:w-full md:mr-0 md:mb-5.5"
        >
          <BlogSidebar
            v-sticky="shouldStick"
            :categories="categories"
            sticky-side="0"
            sticky-offset="{top: 30, bottom: 0}"
          />
        </div>

        <div class="w-2/3 xl:w-full xl:flex-1">
          <BlogFilters class="mb-8 sm:mb-4" />
          <BlogItems :items="posts" />
          <div class="flex-center mt-18 sm:mt-12">
            <LoadMoreText :cnt="postsLeft" :itemsSclon="$t('articles')" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
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
    const posts = [{}, {}, {}, {}, {}, {}]
    const categories = [
      {
        title: 'Блог',
        cnt: 33,
      },
      {
        title: 'Болезни и лечение',
        cnt: 33,
      },
      {
        title: 'Ветеринары',
        cnt: 62,
      },
      {
        title: 'Вопросы и ответы',
        cnt: 24,
      },
      {
        title: 'Натуральное кормление',
        cnt: 12,
      },
      {
        title: 'Обновления',
        cnt: 58,
      },
      {
        title: 'Уход',
        cnt: 12,
      },
    ]
    const { value: shouldStick } = useResizeValue((wWidth) => {
      return wWidth > Breakpoints.md
    })
    const postsLeft = ref(23)
    return { breadcrumbs, posts, categories, shouldStick, postsLeft }
  },
})
</script>

<style lang="postcss">
</style>