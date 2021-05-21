<template>
  <aside class="blog-post-sidebar">
    <div class="blog-post-sidebar__card bg-white rounded-lg">
      <div
        class="text-center py-6 text-2lg font-bold border-b border-grey border-opacity-20 sm:text-base sm:py-4"
      >
        {{ $t('readAlso') }}
      </div>
      <BlogPostSidebarRelated :items="items" />
      <NuxtLink
        to="#"
        class="block text-center py-6 text-sm xs:text-xs border-t border-grey border-opacity-20 font-semibold text-green group
              sm:py-4"
      >
        <span class="border-b-2 border-green border-opacity-50 border-dotted transition-all group-hover:border-green group-hover:border-solid">{{
          $t('watchMore')
        }}</span>
      </NuxtLink>
    </div>
    <NuxtLink to="#" class="btn-green mt-2 sm:!py-4.5 sm:!font-semibold">
      <svgShare width="22" class="mr-2" />
      {{ $t('shareArticle') }}
    </NuxtLink>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgShare from '@/assets/icons/share.svg?inline'
export default defineComponent({
  components: { svgShare },
  setup() {
    const items = computed(() => [
      {
        image: require('@/assets/img/blog_post_category_mock.png'),
        title: 'Как назвать щенка и приучить его к имени?',
      },
      {
        image: require('@/assets/img/blog_post_category_mock.png'),
        title: 'Как назвать котенка. Клички и имена для мальчика или девочки',
      },
      {
        image: require('@/assets/img/blog_post_category_mock.png'),
        title: 'Сравнительный возраст кошки и человека',
      },
      {
        image: require('@/assets/img/blog_post_category_mock.png'),
        title: 'Как понять что кошка стареет?',
      },
    ])
    return { items }
  },
})
</script>

<style lang="postcss">
.blog-post-sidebar {
  &__card {
    box-shadow: 15px 15px 40px rgba(82, 98, 114, 0.15);
  }
}
</style>