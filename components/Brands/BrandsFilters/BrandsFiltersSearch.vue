<template>
  <form
    action="#"
    class="flex-y-center relative max-w-[500px] md:max-w-full"
    @submit.prevent="search"
  >
    <input
      id="inp"
      v-model="phrase"
      class="flex-1 pl-14 pr-5 py-2.5 border bg-white border-grey-light rounded-md focus:outline-none font-medium placeholder-grey placeholder-opacity-70 sm:text-sm sm:pl-5 sm:pr-12"
      type="text"
      :placeholder="inpPlaceholder"
      @focus="onFocus"
      @blur="onBlur"
    />
    <!-- <label
      v-if="showLabel"
      for="inp"
      class="overflow-hidden absolute left-14 right-3.5 whitespace-nowrap cursor-text font-medium sm:left-5"
    >
      <span>
        <span class="opacity-70"> Здесь может быть ваш запрос, например:</span>
        <a
          href="#"
          class="text-green border-b-2 border-opacity-50 border-dotted border-green"
          @click.prevent="putText('Happy Baby')"
        >
          Happy Baby
        </a></span
      >
    </label> -->

    <div
      class="w-5.5 cursor-pointer absolute left-5.5 sm:w-4.5 sm:left-auto sm:right-3"
      @click="search"
    >
      <svgSearch />
    </div>
  </form>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import svgSearch from '@/assets/icons/search.svg?inline'
import useResizeValue from '~/utils/compositions/useResizeValue'
import { Breakpoints } from '~/types/constants'
export default defineComponent({
  components: { svgSearch },
  setup() {
    const phrase = ref('')
    const search = () => {}
    const putText = (text: string) => {
      phrase.value = text
    }
    const isFocus = ref(false)
    const showLabel = computed(() => !phrase.value && !isFocus.value)
    const onFocus = () => {
      isFocus.value = true
    }
    const onBlur = () => {
      isFocus.value = false
    }
    const t = useContext().i18n.t.bind(useContext().i18n)
    const { value: inpPlaceholder } = useResizeValue((wWidth) => {
      if (wWidth < Breakpoints.sm) {
        return t('searchByName')
      }
      return t('hereCanBeYourRequest')
    })
    return {
      phrase,
      search,
      putText,
      showLabel,
      onFocus,
      onBlur,
      inpPlaceholder,
    }
  },
})
</script>

<style lang="postcss">
</style>