<template>
  <div>
    <div class="container">
      <AppBreadcrumbs :items="breadcrumbs" />
      <div>
        <NuxtLink
          :to="localePath('/')"
          class="mb-9 mt-10 lg:mt-8 sm:mt-3 md:mb-6 xs:mb-3 flex items-center text-grey text-opacity-50 hover:text-opacity-100 transition-colors"
        >
          <svgArrowLeft class="mr-2" width="12" />
          <span class="text-sm sm:text-xs uppercase font-bold xs:hidden">
            {{ $t('goToMain') }}
          </span>
        </NuxtLink>
        <div>
          <h1 class="mb-3 sm:text-lg sm:mb-1.5
          ">Шаблон</h1>
          <div class="sm:text-sm">
            <p class="mb-3">
              Повседневная практика показывает, что укрепление и развитие
              структуры способствует подготовки и реализации направлений
              прогрессивного развития. Таким образом дальнейшее развитие
              различных форм деятельности обеспечивает широкому кругу
              (специалистов) участие в формировании направлений прогрессивного
              развития. Идейные соображения высшего порядка, а также постоянное
              информационно-пропагандистское обеспечение нашей деятельности
              позволяет оценить значение модели развития. С другой стороны
              сложившаяся структура организации требуют определения и уточнения
              модели развития.
            </p>
            <p>
              Значимость этих проблем настолько очевидна, что новая модель
              организационной деятельности представляет собой интересный
              эксперимент проверки соответствующий условий активизации. Таким
              образом новая модель организационной деятельности влечет за собой
              процесс внедрения и модернизации модели развития. Разнообразный и
              богатый опыт дальнейшее развитие различных форм деятельности
              позволяет выполнять важные задания по разработке новых
              предложений.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgArrowLeft from '@/assets/icons/arrow_left_long_bold.svg?inline'
export default defineComponent({
  components: { svgArrowLeft },
  setup() {
    const breadcrumbs = [
      {
        name: 'Товари для кошек',
      },
      {
        name: 'Корм и лакомства для кошек',
      },
    ]
    return { breadcrumbs }
  },
})
</script>

<style lang="postcss">
</style>