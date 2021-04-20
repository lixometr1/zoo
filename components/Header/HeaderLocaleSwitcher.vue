<template>
  <div
    class="flex items-center leading-none divide-x-2 divide-opacity-50 divide-grey"
  >
    <a
      href="javascript:void(0)"
      v-for="(locale, idx) in locales"
      :key="idx"
      class="uppercase px-2 cursor-pointer text-grey text-opacity-50 font-bold"
      :class="{ '!text-opacity-100': locale.code === activeLocale }"
      @click="selectLocale(locale.code)"
    >
      {{ locale.code }}
    </a>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const i18n = useContext().i18n
    const locales = computed(() => i18n.locales)
    const selectLocale = (code: string) => {
      i18n.setLocale(code)
    }
    const activeLocale = computed(() => i18n.locale)
    return { locales, selectLocale, activeLocale }
  },
})
</script>

<style lang="postcss">
</style>