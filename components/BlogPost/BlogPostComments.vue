<template>
  <div class="bg-white pt-20 pb-12 lg:py-14 sm:py-8">
    <div class="container">
      <h2 class="mb-14 lg:mb-10 sm:mb-8 sm:text-2lg">{{ $t('articleComments') }}</h2>
      <div class="space-y-5.5">
        <BlogPostComment v-for="(item, idx) in items" :key="idx" />
      </div>
      <div class="flex-y-center flex-col mt-8 sm:mt-6">
        <LoadMoreText
          :cnt="commentsToLoad"
          :itemsSclon="$t('comments')"
          class="my-9 sm:my-4"
        />
        <div class="btn-green btn-green--shadow !px-9 !py-4.5 sm:text-sm xs:w-full">
          {{ $t('leftComment') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [{}, {}, {}]
    const commentsToLoad = ref(24)
    return { items, commentsToLoad }
  },
})
</script>

<style lang="postcss">
</style>