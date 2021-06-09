<template>
  <div class="flex-center space-x-6 sm:space-x-0 sm:justify-around">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      class="flex-y-center flex-col cursor-pointer "
      @click="setStars(idx)"
    >
      <StarHandler
        class="w-9 text-green cursor-pointer mb-2 xs:w-8 xxs:w-7"
        :hover="false"
        :active="value !== null && idx <= value"
        v-bind="{ strokeClass: 'text-grey text-opacity-50' }"
      />
      <div class="font-medium text-sm xs:hidden" :class="{ 'opacity-50': value == null || idx > value }">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: Number,
  },
  setup(props, { emit }) {
      console.log(props.value)
    const setStars = (cnt: number) => {
      emit('input', cnt)
    }
    const { app, i18n } = useContext()
    const items = [
      {
        name: i18n.t('reviewsText[0]'),
      },
      {
        name: i18n.t('reviewsText[1]'),
      },
      {
        name: i18n.t('reviewsText[2]'),
      },
      {
        name: i18n.t('reviewsText[3]'),
      },
      {
        name: i18n.t('reviewsText[4]'),
      },
    ]
    return { setStars, items }
  },
})
</script>

<style lang="postcss">
</style>