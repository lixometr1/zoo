<template>
  <div class="pt-16 md:pt-10 sm:pt-4">
    <h3 class="md:text-2lg">{{ title }}</h3>
    <div class="mt-5.5 sm:mt-1.5 md:mt-3 sm:text-sm">
      {{ $t('itemsAdded') }}: <span class="font-bold">{{ itemsCnt }}</span>
    </div>
    <div>
      <a
        href="javascript:void(0)"
        class="mt-4 flex-y-center text-sm uppercase font-bold text-grey text-opacity-50 hover:text-green transition-all sm:text-xs"
        @click.prevent="clearList"
      >
        <svgCross width="8" class="mr-2.5" />
        {{ $t('clearList') }}
      </a>
    </div>
    <CompareSidebarFilter
      v-model="filterModel"
      class="mt-9 pb-7 border-b-2 border-grey border-opacity-20 sm:mt-5 sm:pb-5"
    />
    <div class="mt-6">
      <a
        href="#"
        class="text-blue font-bold flex-y-center hover:text-green transition-all sm:text-sm"
        @click.prevent="openList"
      >
        <svgBurger width="20" class="mr-2" />{{ $t('otherLists') }}
        <span class="opacity-50 ml-1">{{ otherListsCnt }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgCross from '@/assets/icons/cross.svg?inline'
import svgBurger from '@/assets/icons/burger.svg?inline'
import useModal from '~/utils/compositions/useModal'
import { ModalName } from '~/types/modal.enum'
export default defineComponent({
  components: { svgCross, svgBurger },
  props: {
    filter: String,
  },
  setup(props, { emit }) {
    const title = computed(() => 'Сухие корма для кошек')
    const itemsCnt = computed(() => 7)
    const clearList = () => {}
    const filterModel = computed({
      get() {
        return props.filter
      },
      set(val) {
        emit('update:filter', val)
      },
    })
    const { showByName } = useModal()

    const otherListsCnt = computed(() => 5)
    const openList = () => {
      showByName(ModalName.compareList)
    }
    return { title, itemsCnt, clearList, filterModel, otherListsCnt, openList }
  },
})
</script>

<style lang="postcss">
</style>