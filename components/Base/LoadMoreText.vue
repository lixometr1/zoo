<template>
  <button class="flex group" v-bind="$attrs" v-on="$listeners">
    <div class="mr-4">
      <svgRefresh
        class="text-green"
        :class="{ 'animate-spin': loading }"
        width="25"
      />
    </div>
    <div class="text-blue font-bold transition-colors group-hover:text-green focus:outline-none" tabindex="0">
      <slot name="text">
        {{ $t('showMore') }} {{ cnt }}
        <span class="lowercase">{{ itemsText }}</span>
      </slot>
    </div>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgRefresh from '@/assets/icons/refresh.svg?inline'
import useWordSclon from '~/utils/compositions/useWordSclon'

export default defineComponent({
  components: { svgRefresh },
  props: {
    loading: Boolean,

    cnt: {
      type: Number,
      default: 0,
    },
    itemsSclon: {
      type: Array as () => string[],
      default: () => [],
    },
  },
  setup(props) {
    const { itemsSclon, cnt } = toRefs(props)
    const itemsText = computed(() => {
      const { exec } = useWordSclon(itemsSclon.value)
      return exec(cnt.value)
    })
    return { itemsText }
  },
})
</script>

<style lang="postcss">
</style>