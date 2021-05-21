<template>
  <div class="text-center">
    <!-- aspect-w-10 aspect-h-3  -->
    <div
      class="w-full rounded-xl h-[435px] md:h-[350px] sm:h-[250px] xs:h-[220px] bg-cover bg-center"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="flex justify-center mt-11 md:mt-9 sm:mt-6">
      <div class="text-grey text-opacity-50 mr-3.5">
        {{ date }}
      </div>
      <NuxtLink
        :to="categoryLink"
        class="text-green font-medium hover:underline"
        >{{ categoryName }}</NuxtLink
      >
    </div>
    <div class="mt-4 sm:mt-3">
      <h1 class="sm:text-2lg">{{ title }}</h1>
    </div>
    <div class="mt-5 text-lg font-medium xl:text-base sm:text-sm sm:mt-3 ">
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const post = inject('post')
    const image = computed(() => require('@/assets/img/blog_post_mock.jpeg'))
    const date = computed(() => 'Май, 2020')
    const categoryName = computed(() => 'Ветеринары')
    const title = computed(() => 'Топ 20 кормов, выбор редакции')
    const categoryLink = computed(() => '#')
    const description = computed(
      () =>
        `Уже нашли собаку своей мечты? Поздравляем! Теперь осталось решить, как назвать щенка. Кажется, что это довольно просто, но в процессе возникает много вопросов. Можно ли назвать щенка человеческим именем? Какой длины должна быть кличка? Как понять, что собаке понравилась кличка, которую вы выбрали? Мы дадим несколько советов по выбору клички для щенка и расскажем, как его приучить к новому имени...`
    )
    return { image, date, categoryName, title, categoryLink, description }
  },
})
</script>

<style lang="postcss">
</style>