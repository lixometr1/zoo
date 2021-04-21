<template>
  <div class="font-medium">
    <div v-if="has" class="flex text-green items-center">
      <svgCheckMark width="10" class="mr-2" />
      <div>{{ text }}</div>
    </div>
    <div v-else class="flex text-grey items-center">
      <div>{{ text }}</div>
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
export default defineComponent({
  components: { svgCheckMark },
  props: {
    has: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const { has } = toRefs(props)
    const i18n = useContext().i18n
    const text = computed(() =>
      has.value ? i18n.t('available') : i18n.t('notAvailable')
    )
    return { text }
  },
})
</script>

<style lang="postcss">
</style>