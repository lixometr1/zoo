<template>
  <div class="pb-6">
    <div class="flex-y-center xs:flex-col xs:items-start">
      <h4 class="font-bold">{{ item.name }}</h4>
      <div class="ml-2 xs:w-full xs:ml-0 xs:mt-1">
        <StarsPanel
          :stars="item.stars"
        />
      </div>
    </div>
    <div class="mt-2 text-opacity-50 text-grey flex-y-center xs:mt-4">
      <svgCalendar width="20" class="sm:w-4"/>
      <div class="font-medium ml-3">
        {{ item.date | dateFormat('DD.MM.YYYY') }}
      </div>
    </div>
    <div class="mt-4 text-opacity-80 text-grey">
      {{ item.text }}
    </div>
    <div v-if="item.pros" class="mt-7 sm:mt-5">
      <div class="font-bold text-lg text-opacity-80 text-grey">
        {{ $t('pros') }}
      </div>
      {{ item.pros }}
    </div>
    <div v-if="item.cons" class="mt-7 sm:mt-5">
      <div class="font-bold text-lg text-opacity-80 text-grey">
        {{ $t('cons') }}
      </div>
      {{ item.cons }}
    </div>
    <div class="flex-y-center divide-grey-500 divide-x mt-4.5">
      <div
        class="opacity-50 flex-y-center cursor-pointer pr-4"
        :class="{ 'opacity-100': hasLike }"
      >
        <ThumbUpHandler
          class="text-grey w-4.5"
          fillClass="text-green hover:opacity-50"
          :hover="true"
          :active="hasLike"
        />
        <span class="font-medium ml-1">{{ item.likes }}</span>
      </div>
      <div
        class="opacity-50 flex-y-center pl-4 cursor-pointer"
        :class="{ 'opacity-100': hasDislike }"
      >
        <ThumbDownHandler
          class="text-grey t w-4.5 cursor-pointer"
          fillClass="text-red hover:opacity-50"
          :hover="true"
          :active="hasDislike"
        />
        <span class="font-medium ml-1">{{ item.dislikes }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgCalendar from '@/assets/icons/calendar.svg?inline'
interface Review {
  name: string
  date: string
  stars: number
  text: string
  pros: string
  cons: string
  likes: number
  dislikes: number
  action: 'like' | 'dislike' | undefined
}
export default defineComponent({
  components: { svgCalendar },
  props: {
    item: {
      type: Object as () => Review,
      default: () => ({}),
    },
  },
  setup(props) {
    const { item } = toRefs(props)
    const hasDislike = computed(() => item.value.action === 'dislike')
    const hasLike = computed(() => item.value.action === 'like')
    return { hasLike, hasDislike }
  },
})
</script>

<style lang="postcss">
</style>