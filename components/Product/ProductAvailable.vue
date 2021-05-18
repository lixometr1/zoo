<template>
  <div class="product-card__available font-medium">
    <div
      v-if="status === 1 || status === 2"
      class="flex text-green items-center"
      :class="{ 'text-green': status === 1, 'text-red-light': status === 2 }"
    >
      <svgCheckMark width="10" class="mr-2" />
      <div>
        {{ text }} <span v-if="cnt">{{ cnt }}</span>
      </div>
    </div>
    <div v-else class="flex text-grey items-center opacity-40">
      <svgCross class="mr-2" width="9" />
      <div>
        {{ text }} <span v-if="cnt">{{ cnt }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  toRefs,
  useContext,
} from '@nuxtjs/composition-api'
import svgCheckMark from '@/assets/icons/checkmark.svg?inline'
import svgCross from '@/assets/icons/cross.svg?inline'

export default defineComponent({
  components: { svgCheckMark, svgCross },
  props: {
    // 0 - no, 1 - has, 2 - заканчивается
    status: {
      type: Number,
      default: 1,
    },
    cnt: Number,
  },
  setup(props) {
    const { status } = toRefs(props)
    const i18n = useContext().i18n
    const text = computed(() => {
      if (status.value === 1) {
        return i18n.t('available')
      } else if (status.value === 2) {
        return i18n.t('ends')
      } else {
        return i18n.t('notAvailable')
      }
    })
    return { text }
  },
})
</script>

<style lang="postcss">
</style>