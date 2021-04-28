<template>
  <div class="search-input">
    <input
      v-model="text"
      type="text"
      class="search-input__input"
      :placeholder="inpPlaceholder"
      @keypress.enter="search"
    />
    <div class="search-input__icon" @click="search">
      <svgSearch width="24" class="text-grey" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import svgSearch from '@/assets/icons/search.svg?inline'
import useResizeValue from '@/utils/compositions/useResizeValue'
export default defineComponent({
  components: { svgSearch },
  setup(props, { emit }) {
    const text = ref('')
    const search = () => {
      emit('search', text.value)
    }
    const placeholderTexts = {
      desktop: useContext().i18n.t('searchPlaceholder'),
      mob: useContext().i18n.t('searchPlaceholderMob'),
    }
    const { value: inpPlaceholder } = useResizeValue((wWidth) => {
      if (wWidth < 992) {
        return placeholderTexts.mob
      } else {
        return placeholderTexts.desktop
      }
    })
    return {
      inpPlaceholder,
      search,
      text,
    }
  },
})
</script>

<style lang="postcss">
.search-input {
  @apply flex items-center;
  &__input {
    @apply flex-1 rounded-full bg-grey-light bg-opacity-70 border-grey-light border 
    focus:outline-none
    py-3 px-7 mr-6 
    md:mr-0 md:pr-12
    md:py-2.5 md:px-5;
  }
  &__icon {
    @apply cursor-pointer md:absolute right-10;
    svg {
      @apply md:w-4.5;
    }
  }
}
</style>