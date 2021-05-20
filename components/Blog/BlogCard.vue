<template>
  <div class="blog-card">
    <NuxtLink
      :to="link"
      class="blog-card__image"
      :style="{ backgroundImage: `url(${image})` }"
    ></NuxtLink>
    <div class="flex mt-4">
      <div class="text-grey text-opacity-50 mr-3.5">
        {{ date }}
      </div>
      <NuxtLink :to="categoryLink" class="text-green font-medium hover:underline">{{
        categoryName
      }}</NuxtLink>
    </div>
    <NuxtLink :to="link" class="block mt-1.5  blog-card__title">
      <h4 class="hover:text-green transition-colors">{{ title }}</h4>
    </NuxtLink>
    <div class="blog-card__description mt-2">
      <p>
        {{ description }}
      </p>
    </div>
    <div class="mt-3">
      <NuxtLink class="font-bold text-green border-b-2 border-green border-dotted border-opacity-50 hover:border-solid hover:border-opacity-100 transition-all" :to="link">
        {{ $t('readFull') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const image = computed(() => require('@/assets/img/blog_image_mock.jpeg'))
    const date = computed(() => 'Май, 2020')
    const categoryName = computed(() => 'Ветеринары')
    const title = computed(() => 'Топ 20 кормов, выбор редакции')
    const link = computed(() => '#')
    const categoryLink = computed(() => '#')
    const description = computed(
      () => ` Таким образом постоянный количественный рост и сфера нашей активности
        требуют от нас анализа системы обучения кадрово...`
    )
    return { image, date, categoryName, title, link, categoryLink, description }
  },
})
</script>

<style lang="postcss">
.blog-card {
  &__title {
    @apply leading-6;
  }
  &__image {
    @apply block w-full aspect-h-7 aspect-w-12 rounded-xl bg-cover;
  }
  &__description {
    @apply text-grey text-opacity-70;
  }

}
</style>