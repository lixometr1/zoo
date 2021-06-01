<template>
  <div class="search-input">
    <input
      v-model="text"
      type="text"
      class="search-input__input"
      :placeholder="label"
      @keypress.enter="search"
    />
    <div class="search-input__icon" @click="search">
      <svgSearch width="24" class="text-grey hover:text-green transition-colors" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'
import svgSearch from '@/assets/icons/search.svg?inline'
import useResizeValue from '@/utils/compositions/useResizeValue'
import { Breakpoints } from '~/types/constants'
export default defineComponent({
  components: { svgSearch },
  props: {
    label: String
  },
  setup(props, { emit }) {
    const text = ref('')
    const search = () => {
      emit('search', text.value)
    }
    
    return {
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