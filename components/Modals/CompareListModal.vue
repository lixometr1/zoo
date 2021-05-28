<template>
  <ModalContent class="w-full max-w-[500px] sm:w-[90%] !px-7 sm:!px-4.5" v-on="$listeners">
    <div class="-mx-7 pb-6 border-b border-grey border-opacity-20 sm:pb-5 sm:-mx-4.5">
      <h4 class="px-7 sm:px-4.5">
        <span>{{ $t('compareList') }}</span>
        <span class="opacity-50 ml-1">{{ comapareCnt }}</span>
      </h4>
    </div>

    <div
      class="pt-9 pb-5 space-y-6 md:pt-6 md:pb-4 md:space-y-4 sm:pt-5 sm:pb-3"
    >
      <div class="flex-y-center" v-for="(item, i) in items" :key="i">
        <a
          href="javascript:void(0)"
          class="text-blue font-bold hover:underline"
          @click.prevent="chooseItem(item)"
        >
          <span>{{ item.name }}</span>
          <span class="opacity-50">{{ item.cnt }}</span>
        </a>
        <svgRemove
          width="15"
          class="flex-shrink-0 cursor-pointer ml-auto text-grey text-opacity-50 hover:text-green sm:w-3"
          @click="removeItem(item)"
        />
      </div>
    </div>
  </ModalContent>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgRemove from '@/assets/icons/delete_bin.svg?inline'
export default defineComponent({
  components: { svgRemove },
  setup() {
    const comapareCnt = computed(() => 20)
    const items = computed(() => [
      {
        name: 'Сухие кормы для кошек',
        cnt: 4,
      },
      {
        name: 'Ошейники для собак ',
        cnt: 12,
      },
      {
        name: 'Корм для рыбок',
        cnt: 22,
      },
      {
        name: 'Паштет из дизайнера ',
        cnt: 666,
      },
    ])
    const chooseItem = (item: any) => {}
    const removeItem = (item: any) => {}
    return { comapareCnt, items, chooseItem, removeItem }
  },
})
</script>

<style lang="postcss">
</style>