<template>
  <button class="w-full lazy-load-bar focus:outline-none">
    <div class="mr-4"><svgRefresh class="text-green" width="25" /></div>
    <div class="text-blue font-bold" tabindex="0" @click="load">
      Показать еще {{ cnt }} <span class="lowercase">{{ itemsText }}</span>
    </div>
  </button>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'
import svgRefresh from '@/assets/icons/refresh.svg?inline'
import useWorkSclon from '@/utils/compositions/useWordSclon'
export default defineComponent({
  components: { svgRefresh },
  props: {
    cnt: Number,
  },
  setup(props, { emit }) {
    const { cnt } = toRefs(props)
    const i18n = useContext().i18n
    const tItems = (i18n.t('items') as unknown) as string[]
    const { exec } = useWorkSclon(tItems)
    const itemsText = computed(() => exec(cnt?.value as number))
    const load = () => {
      emit('load')
    }
    return { itemsText, load }
  },
})
</script>

<style lang="postcss">
.lazy-load-bar {
  @apply flex justify-center items-center bg-white rounded-lg py-9 border border-grey-light;
}
</style>