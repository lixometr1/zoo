<template>
  <div class="pt-16">
    <h3>{{ title }}</h3>
    <div class="mt-5.5">
      {{ $t('itemsAdded') }}: <span class="font-bold">{{ itemsCnt }}</span>
    </div>
    <div>
      <a
        href="javascript:void(0)"
        class="mt-4 flex-y-center text-sm uppercase font-bold text-grey text-opacity-50 hover:text-green transition-all"
        @click.prevent="clearList"
      >
        <svgCross width="8" class="mr-2.5" />
        {{ $t('clearList') }}</a
      >
    </div>
    <CompareSidebarFilter
      v-model="filterModel"
      class="mt-9 pb-7 border-b-2 border-grey border-opacity-20"
    />
    <div class="mt-6">
      <a href="#" class="text-blue font-bold flex-y-center hover:text-green transition-all">
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
    const otherListsCnt = computed(() => 5)
    return { title, itemsCnt, clearList, filterModel, otherListsCnt }
  },
})
</script>

<style lang="postcss">
</style>