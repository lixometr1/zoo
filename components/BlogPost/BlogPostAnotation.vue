<template>
  <div class="blog-post-anotation">
    <h2 class="!mb-11">{{ $t('articleAnotation') }}</h2>
    <div class="blog-post-anotation__inner space-y-8 sm:space-y-4">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="blog-post-anotation__item"
      >
        <div class="blog-post-anotation__number">0{{ idx + 1 }}</div>
        <div>
          <h4 class="font-semibold leading-7 sm:text-lg sm:leading-6">{{ item.title }}</h4>
          <ul
            v-if="item.children && item.children.length > 0"
            class="checkmark-list mt-4 sm:mt-3 space-y-1.5"
          >
            <li v-for="(child, i) in item.children" :key="i" class="sm:text-sm">
              {{ child.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = [
      {
        title: 'Что нужно учитывать, выбирая имя для щенка?',
        children: [
          {
            title: 'Выбирайте имя, которое заканчивается на согласную',
          },
          {
            title: 'Избегайте длинных имён',
          },
          {
            title: 'Имя не должно быть созвучно с командами',
          },
          {
            title: 'Имена любимцев не должны быть похожи',
          },
        ],
      },
      {
        title: 'Где брать идеи для имени?',
      },
      {
        title: 'Что нужно понимать об имени щенка?',
      },
      {
        title: 'Как приучить щенка к имени?',
      },
    ]
    return { items }
  },
})
</script>

<style lang="postcss">
.blog-post-anotation {
  > div {
    @apply mb-0;
  }
  &__item {
    @apply flex items-start sm:flex-col;
  }
  &__number {
    @apply bg-white w-[64px] h-[64px] -mt-4 rounded-full text-green 
            flex-center flex-shrink-0 text-3xl font-semibold mr-6
            sm:w-[40px] sm:h-[40px] sm:mt-0 sm:text-lg sm:mr-0 sm:mb-2;
    box-shadow: 5px 5px 40px rgba(69, 80, 103, 0.2);
  }
}
</style>